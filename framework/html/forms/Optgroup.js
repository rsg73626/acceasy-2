import Element from '../Element.js'

export default class Optgroup extends Element {

    constructor(content, label) {
        super(Optgroup.tagName, content, true, false, true, [])
        this.label(label)
    }

    label(value) {
        if (acceasy.type.isString(value)) {
            this.set('label', value)
        }
        return this
    }

}

Optgroup.tagName = 'optgroup'

Optgroup.buildFunctions = {

    optgroup: (label, ...content) => {
        return new Optgroup(content, label)
    }

}

