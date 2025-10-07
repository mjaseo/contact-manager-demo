import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::login
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/admin/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::login
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::login
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::login
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::login
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::login
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::login
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

logout.definition = {
    methods: ["get","head"],
    url: '/admin/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
logout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
logout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout.url(options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
logoutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
logoutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

logout.form = logoutForm

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::register
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/admin/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::register
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::register
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::register
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::register
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::register
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::register
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm
