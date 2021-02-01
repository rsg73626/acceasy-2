import Element from '../Element.js'

export default class Input extends Element {

    constructor(type, name, required = true, placeholder = null) {
        super(Input.tagName, null, false, true, false, [])
        this.type(type)
        this.name(name)
        this.required(required)
        this.placeholder(placeholder)
    }

    type(value) {
        if (acceasy.type.isString(value)) {
            this.set('type', value)
        }
        return this
    }

    name(value) {
        if (acceasy.type.isString(value) || value == null) {
            this.set('name', value)
        }
        return this
    }

    required(value = true) {
        if (acceasy.type.isBoolean(value)) {
            this.set('required', value)
        }
        return this
    }

    placeholder(value) {
        if (acceasy.type.isString(value) || value == null) {
            this.set('placeholder', value)
        }
        return this
    }

}

Input.tagName = 'input'

Input.buildFunctions = {

    input: (type, name, required = true, placeholder = null) => {
        return new Input(type, name, required, placeholder)
    },
    
    inputHidden: (name, value = null) => {
        const input = new Input('hidden', name)
        input.visible = false
        input.set('value', value)
        return input
    },
    
    inputText: (name, required = true, placeholder = null) => {
        return new Input('text', name, required, placeholder)
    },
    
    inputTel: (name, required = true, placeholder = null) => {
        return new Input('tel', name, required, placeholder)
    },
    
    inputURL: (name, required = true, placeholder = null) => {
        return new Input('url', name, required, placeholder)
    },
    
    inputEmail: (name, required = true, placeholder = null) => {
        return new Input('email', name, required, placeholder)
    },
    
    inputPassword: (name, required = true, placeholder = null) => {
        return new Input('password', name, required, placeholder)
    },
    
    inputDate: (name, required = true, placeholder = null) => {
        return new Input('date', name, required, placeholder)
    },
    
    inputMonth: (name, required = true, placeholder = null) => {
        return new Input('month', name, required, placeholder)
    },
    
    inputTime: (name, required = true, placeholder = null) => {
        return new Input('time', name, required, placeholder)
    },
    
    inputLocalDateTime: (name, required = true, placeholder = null) => {
        return new Input('datetime-local', name, required, placeholder)
    },
    
    inputNumber: (name, required = true, placeholder = null) => {
        return new Input('number', name, required, placeholder)
    },
    
    inputRange: (name, required = true, placeholder = null) => {
        return new Input('range', name, required, placeholder)
    },
    
    inputColor: (name, required = true, placeholder = null) => {
        return new Input('color', name, required, placeholder)
    },
    
    inputCheckbox: (name, checked = false, required = false) => {
        const input = new Input('checkbox', name, required, null)
        input.set('checked', checked)
        return input
    },
    
    inputRadio: (name, value, checked = false, required = false) => {
        const input = new Input('radio', name, required, null) 
        input.set('value', value)
        input.set('checked', checked)
        return input
    },
    
    inputFile: (name, required = true, placeholder = null) => {
        return new Input('file', name, required, placeholder)
    },
    
    inputSubmit: (value) => {
        const input = new Input('submit', null, false, null)
        input.set('value', value)
        return input
    },
    
    inputImage: (src) => {
        const input = new Input('image', null, false, null)
        input.set('src', src)
        return input
    },
    
    inputReset: (value) => {
        const input = new Input('reset', null, false, null)
        input.set('value', value)
        return input
    },
    
    inputButton: (value) => {
        const input = new Input('button', null, false, null)
        input.set('value', value)
        return input
    }

}