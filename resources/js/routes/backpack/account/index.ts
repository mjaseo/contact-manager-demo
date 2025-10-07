import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import info7ec40a from './info'
/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::info
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
export const info = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: info.url(options),
    method: 'get',
})

info.definition = {
    methods: ["get","head"],
    url: '/admin/edit-account-info',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::info
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
info.url = (options?: RouteQueryOptions) => {
    return info.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::info
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
info.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: info.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::info
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
info.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: info.url(options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::info
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
const infoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: info.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::info
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
infoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: info.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::info
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
infoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: info.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

info.form = infoForm

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::password
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:52
* @route '/admin/change-password'
*/
export const password = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: password.url(options),
    method: 'post',
})

password.definition = {
    methods: ["post"],
    url: '/admin/change-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::password
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:52
* @route '/admin/change-password'
*/
password.url = (options?: RouteQueryOptions) => {
    return password.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::password
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:52
* @route '/admin/change-password'
*/
password.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: password.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::password
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:52
* @route '/admin/change-password'
*/
const passwordForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: password.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::password
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:52
* @route '/admin/change-password'
*/
passwordForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: password.url(options),
    method: 'post',
})

password.form = passwordForm

const account = {
    info: Object.assign(info, info7ec40a),
    password: Object.assign(password, password),
}

export default account