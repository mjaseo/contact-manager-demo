import ContactController from './ContactController'
import Api from './Api'

const Controllers = {
    ContactController: Object.assign(ContactController, ContactController),
    Api: Object.assign(Api, Api),
}

export default Controllers