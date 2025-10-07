
# ---- Base Stage ----
FROM php:8.2-fpm AS base
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpq-dev \
    libzip-dev \
    zip \
    curl \
    nginx \
    postgresql-client \
    libonig-dev \
    nodejs \
    npm
RUN docker-php-ext-install pdo pdo_pgsql zip mbstring

# ---- Frontend Build Stage ----
FROM base AS frontend
WORKDIR /app

# Copy the entire application first
COPY . .

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Create .env file from example
RUN cp .env.example .env

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Generate application key
RUN php artisan key:generate --force

# Install Node dependencies
RUN npm ci

# Create temporary vite config without wayfinder
RUN echo 'import { defineConfig } from "vite";' > vite.config.ts && \
    echo 'import laravel from "laravel-vite-plugin";' >> vite.config.ts && \
    echo 'import Vue from "@vitejs/plugin-vue";' >> vite.config.ts && \
    echo '' >> vite.config.ts && \
    echo 'export default defineConfig({' >> vite.config.ts && \
    echo '    plugins: [' >> vite.config.ts && \
    echo '        laravel({' >> vite.config.ts && \
    echo '            input: ["resources/js/app.ts"],' >> vite.config.ts && \
    echo '            refresh: true,' >> vite.config.ts && \
    echo '        }),' >> vite.config.ts && \
    echo '        Vue(),' >> vite.config.ts && \
    echo '    ],' >> vite.config.ts && \
    echo '});' >> vite.config.ts

# Create required directory structure and stub files
RUN mkdir -p resources/js/actions/App/Http/Controllers/Auth && \
    mkdir -p resources/js/routes/appearance resources/js/wayfinder && \
    for controller in NewPasswordController PasswordResetLinkController RegisteredUserController EmailVerificationPromptController EmailVerificationNotificationController VerifyEmailController ConfirmedPasswordStatusController ConfirmablePasswordController AuthenticatedSessionController; do \
        echo "export default {};" > "resources/js/actions/App/Http/Controllers/Auth/${controller}.ts"; \
    done && \
    echo 'export const routes = {};' > resources/js/wayfinder/index.ts && \
    echo 'export const queryParams = (options?: RouteQueryOptions) => options ?? {};' >> resources/js/wayfinder/index.ts && \
    echo 'export interface RouteQueryOptions { [key: string]: any };' >> resources/js/wayfinder/index.ts && \
    echo 'export interface RouteDefinition { name: string; [key: string]: any };' >> resources/js/wayfinder/index.ts && \
    echo 'export interface RouteFormDefinition { [key: string]: any };' >> resources/js/wayfinder/index.ts

# Build the application
RUN VITE_APP_NAME="Contact Manager" npm run build

# ---- PHP Stage ----
FROM base AS php
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www/html

# Copy application files
COPY . .
COPY --from=frontend /app/public/build ./public/build
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Create .env file from example
RUN cp .env.example .env

# Install dependencies and setup application
RUN composer install --no-dev --optimize-autoloader && \
    php artisan key:generate --force && \
    chown -R www-data:www-data \
        storage \
        bootstrap/cache \
        public && \
    php artisan storage:link

# Create an entrypoint script
COPY <<'EOF' /docker-entrypoint.sh
#!/bin/sh
set -e

# Wait for database to be ready
until PGPASSWORD=$DB_PASSWORD psql -h "$DB_HOST" -U "$DB_USERNAME" -d "$DB_DATABASE" -c '\q'; do
  echo "Postgres is unavailable - sleeping"
  sleep 1
done

echo "Postgres is up - executing migrations"

# Run migrations and seeders
php artisan migrate --force
php artisan db:seed --force

# Generate wayfinder routes
php artisan wayfinder:generate || true

# Start services
php-fpm -D && nginx -g 'daemon off;'
EOF

RUN chmod +x /docker-entrypoint.sh

EXPOSE 8080

# Use the entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]
