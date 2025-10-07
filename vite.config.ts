import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import Vue from '@vitejs/plugin-vue';
// import { wayfinder } from '@laravel/vite-plugin-wayfinder'; // ✅ named import

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            refresh: true,
        }),
        Vue(),
        // ...(process.env.WAYFINDER_DISABLE ? [] : [wayfinder()]),
    ],
});
