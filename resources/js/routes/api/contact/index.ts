import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Contact\Http\Controllers\ContactController::index
* @see Modules/Contact/Http/Controllers/ContactController.php:13
* @route '/api/v1/contacts'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/contacts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::index
* @see Modules/Contact/Http/Controllers/ContactController.php:13
* @route '/api/v1/contacts'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::index
* @see Modules/Contact/Http/Controllers/ContactController.php:13
* @route '/api/v1/contacts'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::index
* @see Modules/Contact/Http/Controllers/ContactController.php:13
* @route '/api/v1/contacts'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::index
* @see Modules/Contact/Http/Controllers/ContactController.php:13
* @route '/api/v1/contacts'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::index
* @see Modules/Contact/Http/Controllers/ContactController.php:13
* @route '/api/v1/contacts'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::index
* @see Modules/Contact/Http/Controllers/ContactController.php:13
* @route '/api/v1/contacts'
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

/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/api/v1/contacts'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/contacts',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/api/v1/contacts'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/api/v1/contacts'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/api/v1/contacts'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/api/v1/contacts'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
export const show = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/contacts/{contact}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
show.url = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contact: args }
    }

    if (Array.isArray(args)) {
        args = {
            contact: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        contact: args.contact,
    }

    return show.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
show.get = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
show.head = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
const showForm = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
showForm.get = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
showForm.head = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/api/v1/contacts/{contact}'
*/
export const update = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/contacts/{contact}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/api/v1/contacts/{contact}'
*/
update.url = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contact: args }
    }

    if (Array.isArray(args)) {
        args = {
            contact: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        contact: args.contact,
    }

    return update.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/api/v1/contacts/{contact}'
*/
update.put = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/api/v1/contacts/{contact}'
*/
update.patch = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/api/v1/contacts/{contact}'
*/
const updateForm = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/api/v1/contacts/{contact}'
*/
updateForm.put = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/api/v1/contacts/{contact}'
*/
updateForm.patch = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Contact\Http\Controllers\ContactController::destroy
* @see Modules/Contact/Http/Controllers/ContactController.php:55
* @route '/api/v1/contacts/{contact}'
*/
export const destroy = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/contacts/{contact}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::destroy
* @see Modules/Contact/Http/Controllers/ContactController.php:55
* @route '/api/v1/contacts/{contact}'
*/
destroy.url = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contact: args }
    }

    if (Array.isArray(args)) {
        args = {
            contact: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        contact: args.contact,
    }

    return destroy.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::destroy
* @see Modules/Contact/Http/Controllers/ContactController.php:55
* @route '/api/v1/contacts/{contact}'
*/
destroy.delete = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::destroy
* @see Modules/Contact/Http/Controllers/ContactController.php:55
* @route '/api/v1/contacts/{contact}'
*/
const destroyForm = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::destroy
* @see Modules/Contact/Http/Controllers/ContactController.php:55
* @route '/api/v1/contacts/{contact}'
*/
destroyForm.delete = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const contact = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default contact