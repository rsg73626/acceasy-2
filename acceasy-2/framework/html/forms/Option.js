import Element from '../Element.js'


export default class Option extends Element {

    constructor(content, value) {
        super(Option.tagName, content)
        this.value(value)
    }

    selected(value = true) {
        if (acceasy.type.isBoolean(value)) {
            this.set('selected', value)
        }
        return this
    }

    value(val) {
        if (acceasy.type.isString(val) || acceasy.type.isNumber(val)) {
            this.set('value', val)
        }
        return this
    }

}

Option.tagName = 'option'

Option.buildFunctions = {

    option: (value, ...content) => {
        return new Option(content, value)
    }

}