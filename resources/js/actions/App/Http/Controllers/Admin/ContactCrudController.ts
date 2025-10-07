import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ContactCrudController::index
* @see app/Http/Controllers/Admin/ContactCrudController.php:56
* @route '/admin/contact'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::index
* @see app/Http/Controllers/Admin/ContactCrudController.php:56
* @route '/admin/contact'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::index
* @see app/Http/Controllers/Admin/ContactCrudController.php:56
* @route '/admin/contact'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::index
* @see app/Http/Controllers/Admin/ContactCrudController.php:56
* @route '/admin/contact'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::index
* @see app/Http/Controllers/Admin/ContactCrudController.php:56
* @route '/admin/contact'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::index
* @see app/Http/Controllers/Admin/ContactCrudController.php:56
* @route '/admin/contact'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::index
* @see app/Http/Controllers/Admin/ContactCrudController.php:56
* @route '/admin/contact'
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
* @see \App\Http\Controllers\Admin\ContactCrudController::search
* @see app/Http/Controllers/Admin/ContactCrudController.php:72
* @route '/admin/contact/search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/admin/contact/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::search
* @see app/Http/Controllers/Admin/ContactCrudController.php:72
* @route '/admin/contact/search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::search
* @see app/Http/Controllers/Admin/ContactCrudController.php:72
* @route '/admin/contact/search'
*/
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::search
* @see app/Http/Controllers/Admin/ContactCrudController.php:72
* @route '/admin/contact/search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::search
* @see app/Http/Controllers/Admin/ContactCrudController.php:72
* @route '/admin/contact/search'
*/
searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

search.form = searchForm

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::showDetailsRow
* @see app/Http/Controllers/Admin/ContactCrudController.php:129
* @route '/admin/contact/{id}/details'
*/
export const showDetailsRow = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showDetailsRow.url(args, options),
    method: 'get',
})

showDetailsRow.definition = {
    methods: ["get","head"],
    url: '/admin/contact/{id}/details',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::showDetailsRow
* @see app/Http/Controllers/Admin/ContactCrudController.php:129
* @route '/admin/contact/{id}/details'
*/
showDetailsRow.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return showDetailsRow.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::showDetailsRow
* @see app/Http/Controllers/Admin/ContactCrudController.php:129
* @route '/admin/contact/{id}/details'
*/
showDetailsRow.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showDetailsRow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::showDetailsRow
* @see app/Http/Controllers/Admin/ContactCrudController.php:129
* @route '/admin/contact/{id}/details'
*/
showDetailsRow.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showDetailsRow.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::showDetailsRow
* @see app/Http/Controllers/Admin/ContactCrudController.php:129
* @route '/admin/contact/{id}/details'
*/
const showDetailsRowForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showDetailsRow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::showDetailsRow
* @see app/Http/Controllers/Admin/ContactCrudController.php:129
* @route '/admin/contact/{id}/details'
*/
showDetailsRowForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showDetailsRow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::showDetailsRow
* @see app/Http/Controllers/Admin/ContactCrudController.php:129
* @route '/admin/contact/{id}/details'
*/
showDetailsRowForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showDetailsRow.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showDetailsRow.form = showDetailsRowForm

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::create
* @see app/Http/Controllers/Admin/ContactCrudController.php:53
* @route '/admin/contact/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/contact/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::create
* @see app/Http/Controllers/Admin/ContactCrudController.php:53
* @route '/admin/contact/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::create
* @see app/Http/Controllers/Admin/ContactCrudController.php:53
* @route '/admin/contact/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::create
* @see app/Http/Controllers/Admin/ContactCrudController.php:53
* @route '/admin/contact/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::create
* @see app/Http/Controllers/Admin/ContactCrudController.php:53
* @route '/admin/contact/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::create
* @see app/Http/Controllers/Admin/ContactCrudController.php:53
* @route '/admin/contact/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::create
* @see app/Http/Controllers/Admin/ContactCrudController.php:53
* @route '/admin/contact/create'
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
* @see \App\Http\Controllers\Admin\ContactCrudController::store
* @see app/Http/Controllers/Admin/ContactCrudController.php:71
* @route '/admin/contact'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/contact',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::store
* @see app/Http/Controllers/Admin/ContactCrudController.php:71
* @route '/admin/contact'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::store
* @see app/Http/Controllers/Admin/ContactCrudController.php:71
* @route '/admin/contact'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::store
* @see app/Http/Controllers/Admin/ContactCrudController.php:71
* @route '/admin/contact'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::store
* @see app/Http/Controllers/Admin/ContactCrudController.php:71
* @route '/admin/contact'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::edit
* @see app/Http/Controllers/Admin/ContactCrudController.php:63
* @route '/admin/contact/{id}/edit'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/contact/{id}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::edit
* @see app/Http/Controllers/Admin/ContactCrudController.php:63
* @route '/admin/contact/{id}/edit'
*/
edit.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return edit.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::edit
* @see app/Http/Controllers/Admin/ContactCrudController.php:63
* @route '/admin/contact/{id}/edit'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::edit
* @see app/Http/Controllers/Admin/ContactCrudController.php:63
* @route '/admin/contact/{id}/edit'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::edit
* @see app/Http/Controllers/Admin/ContactCrudController.php:63
* @route '/admin/contact/{id}/edit'
*/
const editForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::edit
* @see app/Http/Controllers/Admin/ContactCrudController.php:63
* @route '/admin/contact/{id}/edit'
*/
editForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::edit
* @see app/Http/Controllers/Admin/ContactCrudController.php:63
* @route '/admin/contact/{id}/edit'
*/
editForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::update
* @see app/Http/Controllers/Admin/ContactCrudController.php:92
* @route '/admin/contact/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/contact/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::update
* @see app/Http/Controllers/Admin/ContactCrudController.php:92
* @route '/admin/contact/{id}'
*/
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::update
* @see app/Http/Controllers/Admin/ContactCrudController.php:92
* @route '/admin/contact/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::update
* @see app/Http/Controllers/Admin/ContactCrudController.php:92
* @route '/admin/contact/{id}'
*/
const updateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::update
* @see app/Http/Controllers/Admin/ContactCrudController.php:92
* @route '/admin/contact/{id}'
*/
updateForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::destroy
* @see app/Http/Controllers/Admin/ContactCrudController.php:47
* @route '/admin/contact/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/contact/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::destroy
* @see app/Http/Controllers/Admin/ContactCrudController.php:47
* @route '/admin/contact/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::destroy
* @see app/Http/Controllers/Admin/ContactCrudController.php:47
* @route '/admin/contact/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::destroy
* @see app/Http/Controllers/Admin/ContactCrudController.php:47
* @route '/admin/contact/{id}'
*/
const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ContactCrudController::destroy
* @see app/Http/Controllers/Admin/ContactCrudController.php:47
* @route '/admin/contact/{id}'
*/
destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ContactCrudController = { index, search, showDetailsRow, create, store, edit, update, destroy }

export default ContactCrudController