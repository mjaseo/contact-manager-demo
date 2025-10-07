
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
    libonig-dev \  # Add this
    && docker-php-ext-install pdo pdo_pgsql zip mbstring

# ---- Frontend Build Stage ----
FROM node:22 AS frontend
# Install PHP dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    libonig-dev  # Add this

COPY --from=base /usr/local/bin/php /usr/local/bin/php
COPY --from=base /usr/local/lib /usr/local/lib
COPY --from=base /usr/lib/x86_64-linux-gnu/libonig.so* /usr/lib/x86_64-linux-gnu/
WORKDIR /app

# Copy composer and install PHP dependencies first
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
COPY composer.* ./
RUN composer install --no-dev --optimize-autoloader

# Copy package files and install Node dependencies
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY artisan ./

RUN npm ci

# Copy the rest of the application
COPY . .

# Ensure required directories exist
RUN mkdir -p resources/js/routes/appearance && \
    mkdir -p resources/js/wayfinder

# Build the application
RUN npm run build

# ---- PHP Stage ----
FROM base AS php
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www/html

COPY . .
COPY --from=frontend /app/public/build ./public/build

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader \
    && php artisan key:generate --force \
    && chown -R www-data:www-data \
        storage \
        bootstrap/cache \
        public \
    && php artisan storage:link

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
