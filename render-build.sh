#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install PHP dependencies
composer install --no-dev --optimize-autoloader

# Set up Laravel storage directory
php artisan storage:link

# Cache Laravel config
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Install frontend dependencies
npm ci
npm run build
