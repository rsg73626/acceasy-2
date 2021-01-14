import Element from '../Element.js'


export default class Select extends Element {

    constructor(content, name) {
        super(Select.tagName, content, true, false, true, [])
        this.name(name)
    }

    name(value) {
        if (acceasy.type.isString(value) || value == null) {
            this.set('name', value)
        }
        return this
    }

}

Select.tagName = 'select'

Select.buildFunctions = {

    select: (name, ...content) => {
        return new Select(content, name)
    }

}