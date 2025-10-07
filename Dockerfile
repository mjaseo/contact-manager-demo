
# ---- Frontend Build Stage ----
FROM node:22 AS frontend
WORKDIR /app

# Copy the entire project for proper building
COPY . .

# Install dependencies and build
RUN npm ci && \
    npm run build

# ---- PHP Stage ----
FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpq-dev \
    libzip-dev \
    zip \
    curl \
    nginx \
    && docker-php-ext-install pdo pdo_pgsql zip

# Configure nginx
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Set working directory
WORKDIR /var/www/html

# Copy application files
COPY . .
COPY --from=frontend /app/public/build ./public/build

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Generate application key if not exists
RUN php artisan key:generate --force

# Set permissions
RUN chown -R www-data:www-data \
    storage \
    bootstrap/cache \
    public

# Create storage symlink
RUN php artisan storage:link

EXPOSE 8080

# Start nginx and php-fpm
CMD sh -c "php-fpm -D && nginx -g 'daemon off;'"
