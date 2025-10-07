import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Modules\Contact\Http\Controllers\Api\ContactApiController::index
* @see Modules/Contact/Http/Controllers/Api/ContactApiController.php:10
* @route '/api/contacts'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/contacts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Contact\Http\Controllers\Api\ContactApiController::index
* @see Modules/Contact/Http/Controllers/Api/ContactApiController.php:10
* @route '/api/contacts'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\Api\ContactApiController::index
* @see Modules/Contact/Http/Controllers/Api/ContactApiController.php:10
* @route '/api/contacts'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\Api\ContactApiController::index
* @see Modules/Contact/Http/Controllers/Api/ContactApiController.php:10
* @route '/api/contacts'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Contact\Http\Controllers\Api\ContactApiController::index
* @see Modules/Contact/Http/Controllers/Api/ContactApiController.php:10
* @route '/api/contacts'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\Api\ContactApiController::index
* @see Modules/Contact/Http/Controllers/Api/ContactApiController.php:10
* @route '/api/contacts'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\Api\ContactApiController::index
* @see Modules/Contact/Http/Controllers/Api/ContactApiController.php:10
* @route '/api/contacts'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const ContactApiController = { index }

export default ContactApiController