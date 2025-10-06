import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import wayfinder from '@laravel/vite-plugin-wayfinder';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            refresh: true,
        }),
        vue(),
        // ✅ Only enable Wayfinder if not disabled
        ...(process.env.WAYFINDER_DISABLE ? [] : [wayfinder()]),
    ],
});
