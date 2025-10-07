import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::showLoginForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
export const showLoginForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginForm.url(options),
    method: 'get',
})

showLoginForm.definition = {
    methods: ["get","head"],
    url: '/admin/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::showLoginForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
showLoginForm.url = (options?: RouteQueryOptions) => {
    return showLoginForm.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::showLoginForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
showLoginForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginForm.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::showLoginForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
showLoginForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLoginForm.url(options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::showLoginForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
const showLoginFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLoginForm.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::showLoginForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
showLoginFormForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLoginForm.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::showLoginForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:20
* @route '/admin/login'
*/
showLoginFormForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLoginForm.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showLoginForm.form = showLoginFormForm

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::login
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:36
* @route '/admin/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/admin/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::login
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:36
* @route '/admin/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::login
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:36
* @route '/admin/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::login
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:36
* @route '/admin/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::login
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:36
* @route '/admin/login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
const logout0bf9725898bf54069779505e96ede62a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout0bf9725898bf54069779505e96ede62a.url(options),
    method: 'get',
})

logout0bf9725898bf54069779505e96ede62a.definition = {
    methods: ["get","head"],
    url: '/admin/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
logout0bf9725898bf54069779505e96ede62a.url = (options?: RouteQueryOptions) => {
    return logout0bf9725898bf54069779505e96ede62a.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
logout0bf9725898bf54069779505e96ede62a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout0bf9725898bf54069779505e96ede62a.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
logout0bf9725898bf54069779505e96ede62a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout0bf9725898bf54069779505e96ede62a.url(options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
const logout0bf9725898bf54069779505e96ede62aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout0bf9725898bf54069779505e96ede62a.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
logout0bf9725898bf54069779505e96ede62aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout0bf9725898bf54069779505e96ede62a.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
logout0bf9725898bf54069779505e96ede62aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout0bf9725898bf54069779505e96ede62a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

logout0bf9725898bf54069779505e96ede62a.form = logout0bf9725898bf54069779505e96ede62aForm
/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
const logout0bf9725898bf54069779505e96ede62a = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout0bf9725898bf54069779505e96ede62a.url(options),
    method: 'post',
})

logout0bf9725898bf54069779505e96ede62a.definition = {
    methods: ["post"],
    url: '/admin/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
logout0bf9725898bf54069779505e96ede62a.url = (options?: RouteQueryOptions) => {
    return logout0bf9725898bf54069779505e96ede62a.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
logout0bf9725898bf54069779505e96ede62a.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout0bf9725898bf54069779505e96ede62a.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
const logout0bf9725898bf54069779505e96ede62aForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout0bf9725898bf54069779505e96ede62a.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\LoginController::logout
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/LoginController.php:170
* @route '/admin/logout'
*/
logout0bf9725898bf54069779505e96ede62aForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout0bf9725898bf54069779505e96ede62a.url(options),
    method: 'post',
})

logout0bf9725898bf54069779505e96ede62a.form = logout0bf9725898bf54069779505e96ede62aForm

export const logout = {
    '/admin/logout': logout0bf9725898bf54069779505e96ede62a,
    '/admin/logout': logout0bf9725898bf54069779505e96ede62a,
}

const LoginController = { showLoginForm, login, logout }

export default LoginController