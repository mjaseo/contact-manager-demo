import Admin from './Admin'
import Auth from './Auth'
import Settings from './Settings'

const Controllers = {
    Admin: Object.assign(Admin, Admin),
    Auth: Object.assign(Auth, Auth),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers