import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::dashboard
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:24
* @route '/admin/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::dashboard
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:24
* @route '/admin/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::dashboard
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:24
* @route '/admin/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::dashboard
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:24
* @route '/admin/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::dashboard
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:24
* @route '/admin/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::dashboard
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:24
* @route '/admin/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::dashboard
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:24
* @route '/admin/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::redirect
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
export const redirect = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(options),
    method: 'get',
})

redirect.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::redirect
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
redirect.url = (options?: RouteQueryOptions) => {
    return redirect.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::redirect
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
redirect.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::redirect
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
redirect.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirect.url(options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::redirect
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
const redirectForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::redirect
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
redirectForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\AdminController::redirect
* @see vendor/backpack/crud/src/app/Http/Controllers/AdminController.php:36
* @route '/admin'
*/
redirectForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

redirect.form = redirectForm

const AdminController = { dashboard, redirect }

export default AdminController