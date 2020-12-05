import Element from '../Element.js'

export default class Form extends Element {

    constructor(action, method, content) {
        super(Form.tagName, content)
        this.action(action)
        this.method(method)
    }

    action(value) {
        if (acceasy.type.isString(value)) {
            this.set('action', value)
        }
        return this
    }

    method(value) {
        if (acceasy.type.isString(value)) {
            this.set('method', value)
        }
        return this
    }

}

Form.tagName = 'form'

Form.buildFunctions = {

    form: (action, method, ...content) => {
        return new Form(action, method, content)
    }

}