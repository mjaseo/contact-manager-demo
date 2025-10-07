import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
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
const store7bfa600b26bc487b4617d473ab794470 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store7bfa600b26bc487b4617d473ab794470.url(options),
    method: 'post',
})

store7bfa600b26bc487b4617d473ab794470.definition = {
    methods: ["post"],
    url: '/api/v1/contacts',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/api/v1/contacts'
*/
store7bfa600b26bc487b4617d473ab794470.url = (options?: RouteQueryOptions) => {
    return store7bfa600b26bc487b4617d473ab794470.definition.url + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/api/v1/contacts'
*/
store7bfa600b26bc487b4617d473ab794470.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store7bfa600b26bc487b4617d473ab794470.url(options),
    method: 'post',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/api/v1/contacts'
*/
const store7bfa600b26bc487b4617d473ab794470Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store7bfa600b26bc487b4617d473ab794470.url(options),
    method: 'post',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/api/v1/contacts'
*/
store7bfa600b26bc487b4617d473ab794470Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store7bfa600b26bc487b4617d473ab794470.url(options),
    method: 'post',
})

store7bfa600b26bc487b4617d473ab794470.form = store7bfa600b26bc487b4617d473ab794470Form
/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/contacts'
*/
const store992a2347bc1316e84b2c92be2972d319 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store992a2347bc1316e84b2c92be2972d319.url(options),
    method: 'post',
})

store992a2347bc1316e84b2c92be2972d319.definition = {
    methods: ["post"],
    url: '/contacts',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/contacts'
*/
store992a2347bc1316e84b2c92be2972d319.url = (options?: RouteQueryOptions) => {
    return store992a2347bc1316e84b2c92be2972d319.definition.url + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/contacts'
*/
store992a2347bc1316e84b2c92be2972d319.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store992a2347bc1316e84b2c92be2972d319.url(options),
    method: 'post',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/contacts'
*/
const store992a2347bc1316e84b2c92be2972d319Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store992a2347bc1316e84b2c92be2972d319.url(options),
    method: 'post',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::store
* @see Modules/Contact/Http/Controllers/ContactController.php:29
* @route '/contacts'
*/
store992a2347bc1316e84b2c92be2972d319Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store992a2347bc1316e84b2c92be2972d319.url(options),
    method: 'post',
})

store992a2347bc1316e84b2c92be2972d319.form = store992a2347bc1316e84b2c92be2972d319Form

export const store = {
    '/api/v1/contacts': store7bfa600b26bc487b4617d473ab794470,
    '/contacts': store992a2347bc1316e84b2c92be2972d319,
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
const show27e403e2f335e8ff023e904ffe866207 = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show27e403e2f335e8ff023e904ffe866207.url(args, options),
    method: 'get',
})

show27e403e2f335e8ff023e904ffe866207.definition = {
    methods: ["get","head"],
    url: '/api/v1/contacts/{contact}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
show27e403e2f335e8ff023e904ffe866207.url = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show27e403e2f335e8ff023e904ffe866207.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
show27e403e2f335e8ff023e904ffe866207.get = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show27e403e2f335e8ff023e904ffe866207.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
show27e403e2f335e8ff023e904ffe866207.head = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show27e403e2f335e8ff023e904ffe866207.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
const show27e403e2f335e8ff023e904ffe866207Form = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show27e403e2f335e8ff023e904ffe866207.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
show27e403e2f335e8ff023e904ffe866207Form.get = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show27e403e2f335e8ff023e904ffe866207.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/api/v1/contacts/{contact}'
*/
show27e403e2f335e8ff023e904ffe866207Form.head = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show27e403e2f335e8ff023e904ffe866207.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show27e403e2f335e8ff023e904ffe866207.form = show27e403e2f335e8ff023e904ffe866207Form
/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/contacts/{contact}'
*/
const showdc214b75f9f2edd675c98650b7437a7d = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showdc214b75f9f2edd675c98650b7437a7d.url(args, options),
    method: 'get',
})

showdc214b75f9f2edd675c98650b7437a7d.definition = {
    methods: ["get","head"],
    url: '/contacts/{contact}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/contacts/{contact}'
*/
showdc214b75f9f2edd675c98650b7437a7d.url = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showdc214b75f9f2edd675c98650b7437a7d.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/contacts/{contact}'
*/
showdc214b75f9f2edd675c98650b7437a7d.get = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showdc214b75f9f2edd675c98650b7437a7d.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/contacts/{contact}'
*/
showdc214b75f9f2edd675c98650b7437a7d.head = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showdc214b75f9f2edd675c98650b7437a7d.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/contacts/{contact}'
*/
const showdc214b75f9f2edd675c98650b7437a7dForm = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showdc214b75f9f2edd675c98650b7437a7d.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/contacts/{contact}'
*/
showdc214b75f9f2edd675c98650b7437a7dForm.get = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showdc214b75f9f2edd675c98650b7437a7d.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::show
* @see Modules/Contact/Http/Controllers/ContactController.php:34
* @route '/contacts/{contact}'
*/
showdc214b75f9f2edd675c98650b7437a7dForm.head = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showdc214b75f9f2edd675c98650b7437a7d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showdc214b75f9f2edd675c98650b7437a7d.form = showdc214b75f9f2edd675c98650b7437a7dForm

export const show = {
    '/api/v1/contacts/{contact}': show27e403e2f335e8ff023e904ffe866207,
    '/contacts/{contact}': showdc214b75f9f2edd675c98650b7437a7d,
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/api/v1/contacts/{contact}'
*/
const update27e403e2f335e8ff023e904ffe866207 = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update27e403e2f335e8ff023e904ffe866207.url(args, options),
    method: 'put',
})

update27e403e2f335e8ff023e904ffe866207.definition = {
    methods: ["put","patch"],
    url: '/api/v1/contacts/{contact}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/api/v1/contacts/{contact}'
*/
update27e403e2f335e8ff023e904ffe866207.url = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update27e403e2f335e8ff023e904ffe866207.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/api/v1/contacts/{contact}'
*/
update27e403e2f335e8ff023e904ffe866207.put = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update27e403e2f335e8ff023e904ffe866207.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/api/v1/contacts/{contact}'
*/
update27e403e2f335e8ff023e904ffe866207.patch = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update27e403e2f335e8ff023e904ffe866207.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/api/v1/contacts/{contact}'
*/
const update27e403e2f335e8ff023e904ffe866207Form = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update27e403e2f335e8ff023e904ffe866207.url(args, {
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
update27e403e2f335e8ff023e904ffe866207Form.put = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update27e403e2f335e8ff023e904ffe866207.url(args, {
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
update27e403e2f335e8ff023e904ffe866207Form.patch = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update27e403e2f335e8ff023e904ffe866207.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update27e403e2f335e8ff023e904ffe866207.form = update27e403e2f335e8ff023e904ffe866207Form
/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/contacts/{contact}'
*/
const updatedc214b75f9f2edd675c98650b7437a7d = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatedc214b75f9f2edd675c98650b7437a7d.url(args, options),
    method: 'put',
})

updatedc214b75f9f2edd675c98650b7437a7d.definition = {
    methods: ["put","patch"],
    url: '/contacts/{contact}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/contacts/{contact}'
*/
updatedc214b75f9f2edd675c98650b7437a7d.url = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updatedc214b75f9f2edd675c98650b7437a7d.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/contacts/{contact}'
*/
updatedc214b75f9f2edd675c98650b7437a7d.put = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatedc214b75f9f2edd675c98650b7437a7d.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/contacts/{contact}'
*/
updatedc214b75f9f2edd675c98650b7437a7d.patch = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatedc214b75f9f2edd675c98650b7437a7d.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::update
* @see Modules/Contact/Http/Controllers/ContactController.php:50
* @route '/contacts/{contact}'
*/
const updatedc214b75f9f2edd675c98650b7437a7dForm = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatedc214b75f9f2edd675c98650b7437a7d.url(args, {
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
* @route '/contacts/{contact}'
*/
updatedc214b75f9f2edd675c98650b7437a7dForm.put = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatedc214b75f9f2edd675c98650b7437a7d.url(args, {
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
* @route '/contacts/{contact}'
*/
updatedc214b75f9f2edd675c98650b7437a7dForm.patch = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatedc214b75f9f2edd675c98650b7437a7d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatedc214b75f9f2edd675c98650b7437a7d.form = updatedc214b75f9f2edd675c98650b7437a7dForm

export const update = {
    '/api/v1/contacts/{contact}': update27e403e2f335e8ff023e904ffe866207,
    '/contacts/{contact}': updatedc214b75f9f2edd675c98650b7437a7d,
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::destroy
* @see Modules/Contact/Http/Controllers/ContactController.php:55
* @route '/api/v1/contacts/{contact}'
*/
const destroy27e403e2f335e8ff023e904ffe866207 = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy27e403e2f335e8ff023e904ffe866207.url(args, options),
    method: 'delete',
})

destroy27e403e2f335e8ff023e904ffe866207.definition = {
    methods: ["delete"],
    url: '/api/v1/contacts/{contact}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::destroy
* @see Modules/Contact/Http/Controllers/ContactController.php:55
* @route '/api/v1/contacts/{contact}'
*/
destroy27e403e2f335e8ff023e904ffe866207.url = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy27e403e2f335e8ff023e904ffe866207.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::destroy
* @see Modules/Contact/Http/Controllers/ContactController.php:55
* @route '/api/v1/contacts/{contact}'
*/
destroy27e403e2f335e8ff023e904ffe866207.delete = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy27e403e2f335e8ff023e904ffe866207.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::destroy
* @see Modules/Contact/Http/Controllers/ContactController.php:55
* @route '/api/v1/contacts/{contact}'
*/
const destroy27e403e2f335e8ff023e904ffe866207Form = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy27e403e2f335e8ff023e904ffe866207.url(args, {
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
destroy27e403e2f335e8ff023e904ffe866207Form.delete = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy27e403e2f335e8ff023e904ffe866207.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy27e403e2f335e8ff023e904ffe866207.form = destroy27e403e2f335e8ff023e904ffe866207Form
/**
* @see \Modules\Contact\Http\Controllers\ContactController::destroy
* @see Modules/Contact/Http/Controllers/ContactController.php:55
* @route '/contacts/{contact}'
*/
const destroydc214b75f9f2edd675c98650b7437a7d = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroydc214b75f9f2edd675c98650b7437a7d.url(args, options),
    method: 'delete',
})

destroydc214b75f9f2edd675c98650b7437a7d.definition = {
    methods: ["delete"],
    url: '/contacts/{contact}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::destroy
* @see Modules/Contact/Http/Controllers/ContactController.php:55
* @route '/contacts/{contact}'
*/
destroydc214b75f9f2edd675c98650b7437a7d.url = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroydc214b75f9f2edd675c98650b7437a7d.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::destroy
* @see Modules/Contact/Http/Controllers/ContactController.php:55
* @route '/contacts/{contact}'
*/
destroydc214b75f9f2edd675c98650b7437a7d.delete = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroydc214b75f9f2edd675c98650b7437a7d.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::destroy
* @see Modules/Contact/Http/Controllers/ContactController.php:55
* @route '/contacts/{contact}'
*/
const destroydc214b75f9f2edd675c98650b7437a7dForm = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroydc214b75f9f2edd675c98650b7437a7d.url(args, {
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
* @route '/contacts/{contact}'
*/
destroydc214b75f9f2edd675c98650b7437a7dForm.delete = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroydc214b75f9f2edd675c98650b7437a7d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroydc214b75f9f2edd675c98650b7437a7d.form = destroydc214b75f9f2edd675c98650b7437a7dForm

export const destroy = {
    '/api/v1/contacts/{contact}': destroy27e403e2f335e8ff023e904ffe866207,
    '/contacts/{contact}': destroydc214b75f9f2edd675c98650b7437a7d,
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::create
* @see Modules/Contact/Http/Controllers/ContactController.php:21
* @route '/contacts/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/contacts/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::create
* @see Modules/Contact/Http/Controllers/ContactController.php:21
* @route '/contacts/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::create
* @see Modules/Contact/Http/Controllers/ContactController.php:21
* @route '/contacts/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::create
* @see Modules/Contact/Http/Controllers/ContactController.php:21
* @route '/contacts/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::create
* @see Modules/Contact/Http/Controllers/ContactController.php:21
* @route '/contacts/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::create
* @see Modules/Contact/Http/Controllers/ContactController.php:21
* @route '/contacts/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::create
* @see Modules/Contact/Http/Controllers/ContactController.php:21
* @route '/contacts/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Modules\Contact\Http\Controllers\ContactController::edit
* @see Modules/Contact/Http/Controllers/ContactController.php:42
* @route '/contacts/{contact}/edit'
*/
export const edit = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/contacts/{contact}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Contact\Http\Controllers\ContactController::edit
* @see Modules/Contact/Http/Controllers/ContactController.php:42
* @route '/contacts/{contact}/edit'
*/
edit.url = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{contact}', parsedArgs.contact.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Contact\Http\Controllers\ContactController::edit
* @see Modules/Contact/Http/Controllers/ContactController.php:42
* @route '/contacts/{contact}/edit'
*/
edit.get = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::edit
* @see Modules/Contact/Http/Controllers/ContactController.php:42
* @route '/contacts/{contact}/edit'
*/
edit.head = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::edit
* @see Modules/Contact/Http/Controllers/ContactController.php:42
* @route '/contacts/{contact}/edit'
*/
const editForm = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::edit
* @see Modules/Contact/Http/Controllers/ContactController.php:42
* @route '/contacts/{contact}/edit'
*/
editForm.get = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Contact\Http\Controllers\ContactController::edit
* @see Modules/Contact/Http/Controllers/ContactController.php:42
* @route '/contacts/{contact}/edit'
*/
editForm.head = (args: { contact: string | number } | [contact: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const ContactController = { index, store, show, update, destroy, create, edit }

export default ContactController