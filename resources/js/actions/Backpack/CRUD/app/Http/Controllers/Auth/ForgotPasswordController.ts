import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
export const showLinkRequestForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLinkRequestForm.url(options),
    method: 'get',
})

showLinkRequestForm.definition = {
    methods: ["get","head"],
    url: '/admin/password/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
showLinkRequestForm.url = (options?: RouteQueryOptions) => {
    return showLinkRequestForm.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
showLinkRequestForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLinkRequestForm.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
showLinkRequestForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLinkRequestForm.url(options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
const showLinkRequestFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLinkRequestForm.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
showLinkRequestFormForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLinkRequestForm.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:33
* @route '/admin/password/reset'
*/
showLinkRequestFormForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLinkRequestForm.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showLinkRequestForm.form = showLinkRequestFormForm

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::sendResetLinkEmail
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:46
* @route '/admin/password/email'
*/
export const sendResetLinkEmail = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendResetLinkEmail.url(options),
    method: 'post',
})

sendResetLinkEmail.definition = {
    methods: ["post"],
    url: '/admin/password/email',
} satisfies RouteDefinition<["post"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::sendResetLinkEmail
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:46
* @route '/admin/password/email'
*/
sendResetLinkEmail.url = (options?: RouteQueryOptions) => {
    return sendResetLinkEmail.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::sendResetLinkEmail
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:46
* @route '/admin/password/email'
*/
sendResetLinkEmail.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendResetLinkEmail.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::sendResetLinkEmail
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:46
* @route '/admin/password/email'
*/
const sendResetLinkEmailForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendResetLinkEmail.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ForgotPasswordController::sendResetLinkEmail
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ForgotPasswordController.php:46
* @route '/admin/password/email'
*/
sendResetLinkEmailForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendResetLinkEmail.url(options),
    method: 'post',
})

sendResetLinkEmail.form = sendResetLinkEmailForm

const ForgotPasswordController = { showLinkRequestForm, sendResetLinkEmail }

export default ForgotPasswordController