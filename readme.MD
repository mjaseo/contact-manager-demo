Contact Management System (Laravel + Inertia + Vue3)
====================================================

This project is a modular Laravel application using Inertia.js + Vue3 for the frontend.
It includes a Contact Management module with a centralized Vue UI and an admin panel.

----------------------------------------------------
Requirements
----------------------------------------------------
- PHP 8.2+
- Composer
- Node.js 18+
- NPM or Yarn
- MySQL or PostgreSQL
- Git (for version control)

----------------------------------------------------
Installation
----------------------------------------------------
Clone the repository:
```
git clone <your-repo-url> contact-manager
cd contact-manager
```

Install PHP dependencies:
```
composer install
```

Install JS dependencies:
```
npm install
```

Build frontend assets:
```
npm run dev
```

Copy .env file:
```
cp .env.example .env
```

Generate application key:
```
php artisan key:generate
```

Run migrations and seed database:
```
php artisan migrate --seed
```

The seeder will automatically create an admin user.

----------------------------------------------------
Default Admin Account
----------------------------------------------------
After running migrations with seeders, you can log in with:

    Email:    admin@example.com
    Password: password

(IMPORTANT: Change the default password after first login.)

----------------------------------------------------
Development
----------------------------------------------------
Start Laravel development server:
```
php artisan serve
```

Start Vite (for assets & hot reload):
```
npm run dev
```

----------------------------------------------------
Production
----------------------------------------------------
Build frontend assets:
```
npm run build
```

Deploy with optimized settings:
```
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

----------------------------------------------------
Notes
----------------------------------------------------
- The Dashboard tab is hidden for admin users, and the Contact page is set as the default landing page after login.
- Vue components are kept centralized under `resources/js/pages` to avoid duplicated build setups per module.
- API routes are defined in each module (`Modules/Contact/Routes/api.php`) and loaded automatically.

----------------------------------------------------
Quick Start (Summary)
----------------------------------------------------
    composer install
    npm install
    cp .env.example .env
    php artisan key:generate
    php artisan migrate --seed
    npm run dev
    php artisan serve

Then visit:
http://localhost:8000

Login with the seeded admin credentials and start managing contacts.
