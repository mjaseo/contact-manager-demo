import Auth from './Auth'
import AdminController from './AdminController'
import MyAccountController from './MyAccountController'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    AdminController: Object.assign(AdminController, AdminController),
    MyAccountController: Object.assign(MyAccountController, MyAccountController),
}

export default Controllers