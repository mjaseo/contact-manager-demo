
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

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Copy dependency files
COPY composer.* ./
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY artisan ./

# Install dependencies
RUN composer install --no-dev --optimize-autoloader
RUN npm ci

# Copy the rest of the application
COPY . .

# Ensure required directories exist
RUN mkdir -p resources/js/routes/appearance resources/js/wayfinder

# Build the application
RUN npm run build

# ---- PHP Stage ----
FROM base AS php
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www/html

COPY . .
COPY --from=frontend /app/public/build ./public/build
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Install PHP dependencies and setup application
RUN composer install --no-dev --optimize-autoloader
RUN php artisan key:generate --force
RUN chown -R www-data:www-data \
    storage \
    bootstrap/cache \
    public
RUN php artisan storage:link

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

# Start services
php-fpm -D && nginx -g 'daemon off;'
EOF

RUN chmod +x /docker-entrypoint.sh

EXPOSE 8080

# Use the entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]
