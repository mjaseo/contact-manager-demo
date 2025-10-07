import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::store
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:36
* @route '/admin/edit-account-info'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/edit-account-info',
} satisfies RouteDefinition<["post"]>

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::store
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:36
* @route '/admin/edit-account-info'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::store
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:36
* @route '/admin/edit-account-info'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::store
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:36
* @route '/admin/edit-account-info'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Backpack\CRUD\app\Http\Controllers\MyAccountController::store
* @see vendor/backpack/crud/src/app/Http/Controllers/MyAccountController.php:36
* @route '/admin/edit-account-info'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const info = {
    store: Object.assign(store, store),
}

export default info