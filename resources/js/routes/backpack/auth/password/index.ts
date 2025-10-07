import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::reset
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
export const reset = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reset.url(options),
    method: 'get',
})

reset.definition = {
    methods: ["get","head"],
    url: '/admin/password/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::reset
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
reset.url = (options?: RouteQueryOptions) => {
    return reset.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::reset
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
reset.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reset.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::reset
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
reset.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reset.url(options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::reset
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
const resetForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reset.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::reset
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
resetForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reset.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::reset
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
resetForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reset.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

reset.form = resetForm

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::email
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:46
* @route '/admin/password/email'
*/
export const email = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: email.url(options),
    method: 'post',
})

email.definition = {
    methods: ["post"],
    url: '/admin/password/email',
} satisfies RouteDefinition<["post"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::email
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:46
* @route '/admin/password/email'
*/
email.url = (options?: RouteQueryOptions) => {
    return email.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::email
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:46
* @route '/admin/password/email'
*/
email.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: email.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::email
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:46
* @route '/admin/password/email'
*/
const emailForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: email.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::email
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:46
* @route '/admin/password/email'
*/
emailForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: email.url(options),
    method: 'post',
})

email.form = emailForm
