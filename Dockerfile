# ---- Build frontend ----
FROM node:20 AS frontend
WORKDIR /app

COPY package*.json vite.config.* ./
RUN npm install

COPY resources/ resources/
COPY public/ public/
COPY resources/js/ resources/js/

# Disable Wayfinder type generation
ENV WAYFINDER_DISABLE=1
RUN echo "VITE_APP_URL=http://localhost" > .env

RUN npm run build

# ---- Backend / Laravel ----
FROM php:8.3-fpm-bullseye AS backend

RUN apt-get update && apt-get install -y \
    git curl zip unzip libpq-dev libonig-dev libxml2-dev libzip-dev && \
    docker-php-ext-install pdo pdo_pgsql bcmath && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html

# Copy Laravel app
COPY . .
COPY --from=frontend /app/public/build /var/www/html/public/build

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

# Generate key and clear caches
RUN php artisan key:generate --force || true
RUN php artisan config:clear && php artisan route:clear && php artisan view:clear

EXPOSE 8000
CMD php artisan serve --host=0.0.0.0 --port=8000
