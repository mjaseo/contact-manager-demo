# ------------------------------------------------
# Stage 1: Build React frontend
# ------------------------------------------------
# ---- Frontend Build Stage ----
FROM node:22 AS frontend
WORKDIR /app

# Copy only the frontend-related files first
COPY package*.json vite.config.* ./
COPY resources ./resources

RUN npm install
RUN npm run build

# ------------------------------------------------
# Stage 2: Setup Laravel + PHP
# ------------------------------------------------
FROM php:8.2-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    git unzip libpq-dev libzip-dev zip curl \
    && docker-php-ext-install pdo pdo_pgsql zip

# Copy app files
WORKDIR /var/www/html
COPY . .

# Copy built React files from Stage 1
COPY --from=frontend /app/public/js ./public/js
COPY --from=frontend /app/public/build ./public/build

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Cache Laravel config/routes/views
RUN php artisan config:cache && php artisan route:cache && php artisan view:cache

# Permissions
RUN chown -R www-data:www-data storage bootstrap/cache

# Expose port
EXPOSE 8080

# Run Laravel's built-in server
CMD php artisan serve --host=0.0.0.0 --port=8080
