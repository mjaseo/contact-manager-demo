import { RouteRecordRaw } from 'vue-router';

// Auto-import all Vue components from the pages directory
const pages = import.meta.glob('../pages/**/*.vue');

// Convert file paths to route paths
const routes: RouteRecordRaw[] = Object.entries(pages).map(([path, component]) => {
    // Remove '../pages' prefix and '.vue' suffix
    const routePath = path
        .replace('../pages', '')
        .replace('.vue', '')
        .replace(/\/index$/, '')
        .toLowerCase();

    // Convert the file path to a route name
    const name = routePath
        .replace(/\//g, '-')
        .replace(/^\-/, '')
        .replace(/\[(.+)\]/g, ':$1');

    // Handle dynamic route parameters
    const processedPath = routePath
        .replace(/\[(.+)\]/g, ':$1')
        .replace(/\/index$/, '')
        || '/';

    return {
        path: processedPath,
        name: name || 'home',
        component
    };
});

export default routes;
