import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
export const showRegistrationForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showRegistrationForm.url(options),
    method: 'get',
})

showRegistrationForm.definition = {
    methods: ["get","head"],
    url: '/admin/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
showRegistrationForm.url = (options?: RouteQueryOptions) => {
    return showRegistrationForm.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
showRegistrationForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showRegistrationForm.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
showRegistrationForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showRegistrationForm.url(options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
const showRegistrationFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showRegistrationForm.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
showRegistrationFormForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showRegistrationForm.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:89
* @route '/admin/register'
*/
showRegistrationFormForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showRegistrationForm.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showRegistrationForm.form = showRegistrationFormForm

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::register
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:107
* @route '/admin/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/admin/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::register
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:107
* @route '/admin/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::register
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:107
* @route '/admin/register'
*/
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::register
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:107
* @route '/admin/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\RegisterController::register
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/RegisterController.php:107
* @route '/admin/register'
*/
registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

register.form = registerForm

const RegisterController = { showRegistrationForm, register }

export default RegisterController