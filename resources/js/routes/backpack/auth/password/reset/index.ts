import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ResetPasswordController::token
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ResetPasswordController.php:72
* @route '/admin/password/reset/{token}'
*/
export const token = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: token.url(args, options),
    method: 'get',
})

token.definition = {
    methods: ["get","head"],
    url: '/admin/password/reset/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ResetPasswordController::token
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ResetPasswordController.php:72
* @route '/admin/password/reset/{token}'
*/
token.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return token.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ResetPasswordController::token
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ResetPasswordController.php:72
* @route '/admin/password/reset/{token}'
*/
token.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: token.url(args, options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ResetPasswordController::token
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ResetPasswordController.php:72
* @route '/admin/password/reset/{token}'
*/
token.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: token.url(args, options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ResetPasswordController::token
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ResetPasswordController.php:72
* @route '/admin/password/reset/{token}'
*/
const tokenForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: token.url(args, options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ResetPasswordController::token
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ResetPasswordController.php:72
* @route '/admin/password/reset/{token}'
*/
tokenForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: token.url(args, options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\Auth\ResetPasswordController::token
* @see vendor/backpack/crud/src/app/Http/Controllers/Auth/ResetPasswordController.php:72
* @route '/admin/password/reset/{token}'
*/
tokenForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: token.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

token.form = tokenForm
