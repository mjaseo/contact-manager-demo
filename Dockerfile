# Stage 1: Build Frontend
FROM node:20 AS frontend
WORKDIR /app

# Copy all frontend-related files
COPY package*.json vite.config.* ./
COPY resources ./resources
COPY public ./public

RUN npm install
RUN npm run build


# Stage 2: PHP Application
FROM php:8.3-fpm

# Install system deps
RUN apt-get update && apt-get install -y \
    git curl libpng-dev libjpeg-dev libfreetype6-dev libonig-dev libzip-dev unzip zip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl gd bcmath

# Set working directory
WORKDIR /var/www/html

# Copy Laravel files
COPY . .

# Copy frontend build output
COPY --from=frontend /app/public/build ./public/build

# Install PHP dependencies
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-dev --optimize-autoloader

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expose port
EXPOSE 8000

# Run Laravel server
CMD php artisan serve --host=0.0.0.0 --port=8000
