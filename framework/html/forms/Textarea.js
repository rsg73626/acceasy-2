import Element from '../Element.js'

export default class Textarea extends Element {

    constructor(content, name) {
        super(Textarea.tagName, content, true, true, false, ['string', 'number'])
        this.name(name)
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

    rows(value) {
        if (acceasy.type.isNumber(value)) {
            this.set('rows', value)
        }
        return this
    }

    cols(value) {
        if (acceasy.type.isNumber(value)) {
            this.set('cols', value)
        }
        return this
    }

}

Textarea.tagName = 'textarea'

Textarea.buildFunctions = {

    textarea: (name, ...content) => {
        return new Textarea(content, name)
    }

}