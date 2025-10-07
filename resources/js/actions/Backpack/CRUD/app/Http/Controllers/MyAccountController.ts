import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::getAccountInfoForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
export const getAccountInfoForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAccountInfoForm.url(options),
    method: 'get',
})

getAccountInfoForm.definition = {
    methods: ["get","head"],
    url: '/admin/edit-account-info',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::getAccountInfoForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
getAccountInfoForm.url = (options?: RouteQueryOptions) => {
    return getAccountInfoForm.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::getAccountInfoForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
getAccountInfoForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAccountInfoForm.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::getAccountInfoForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
getAccountInfoForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAccountInfoForm.url(options),
    method: 'head',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::getAccountInfoForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
const getAccountInfoFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAccountInfoForm.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::getAccountInfoForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
getAccountInfoFormForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAccountInfoForm.url(options),
    method: 'get',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::getAccountInfoForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:25
* @route '/admin/edit-account-info'
*/
getAccountInfoFormForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAccountInfoForm.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getAccountInfoForm.form = getAccountInfoFormForm

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::postAccountInfoForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:36
* @route '/admin/edit-account-info'
*/
export const postAccountInfoForm = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postAccountInfoForm.url(options),
    method: 'post',
})

postAccountInfoForm.definition = {
    methods: ["post"],
    url: '/admin/edit-account-info',
} satisfies RouteDefinition<["post"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::postAccountInfoForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:36
* @route '/admin/edit-account-info'
*/
postAccountInfoForm.url = (options?: RouteQueryOptions) => {
    return postAccountInfoForm.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::postAccountInfoForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:36
* @route '/admin/edit-account-info'
*/
postAccountInfoForm.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postAccountInfoForm.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::postAccountInfoForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:36
* @route '/admin/edit-account-info'
*/
const postAccountInfoFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: postAccountInfoForm.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::postAccountInfoForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:36
* @route '/admin/edit-account-info'
*/
postAccountInfoFormForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: postAccountInfoForm.url(options),
    method: 'post',
})

postAccountInfoForm.form = postAccountInfoFormForm

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::postChangePasswordForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:52
* @route '/admin/change-password'
*/
export const postChangePasswordForm = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postChangePasswordForm.url(options),
    method: 'post',
})

postChangePasswordForm.definition = {
    methods: ["post"],
    url: '/admin/change-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::postChangePasswordForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:52
* @route '/admin/change-password'
*/
postChangePasswordForm.url = (options?: RouteQueryOptions) => {
    return postChangePasswordForm.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::postChangePasswordForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:52
* @route '/admin/change-password'
*/
postChangePasswordForm.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postChangePasswordForm.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::postChangePasswordForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:52
* @route '/admin/change-password'
*/
const postChangePasswordFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: postChangePasswordForm.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::postChangePasswordForm
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:52
* @route '/admin/change-password'
*/
postChangePasswordFormForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: postChangePasswordForm.url(options),
    method: 'post',
})

postChangePasswordForm.form = postChangePasswordFormForm

const MyAccountController = { getAccountInfoForm, postAccountInfoForm, postChangePasswordForm }

export default MyAccountController