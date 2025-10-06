# Stage 1: Build assets with Node
FROM node:20-alpine AS frontend

WORKDIR /app
COPY package*.json vite.config.* ./
COPY resources ./resources
RUN npm install && npm run build


# Stage 2: Set up PHP + Composer + Apache
FROM php:8.3-apache AS backend

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git zip unzip libpng-dev libonig-dev libxml2-dev curl \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy backend code
COPY . .

# Copy built frontend assets from previous stage
COPY --from=frontend /app/public ./public

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Fix permissions for storage & bootstrap
RUN chown -R www-data:www-data storage bootstrap/cache

# Expose port 80
EXPOSE 80

# Set environment variables for production
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
ENV APP_ENV=production
ENV APP_DEBUG=false

# Adjust Apache config to use Laravel public folder
RUN sed -ri -e 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/000-default.conf

CMD ["apache2-foreground"]
