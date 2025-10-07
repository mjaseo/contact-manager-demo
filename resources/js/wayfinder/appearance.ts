import { defineRoute } from '@laravel/wayfinder'
import { RouteParams } from '../types'

export default defineRoute({
    name: 'settings.appearance',
    component: () => import('../pages/settings/Appearance.vue'),
    path: '/settings/appearance',
    meta: {
        auth: true,
        layout: 'app'
    }
})
