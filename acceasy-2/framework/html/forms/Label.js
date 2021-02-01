import Element from '../Element.js'

export default class Label extends Element {

    constructor(content) {
        super(Label.tagName, content)
    }

    forId(value) {
        if (acceasy.type.isString(value)) {
            this.set('for', value)
        }
        return this
    }

}

Label.tagName = 'label'

Label.buildFunctions = {

    label: (...content) => {
        return new Label(content)
    }

}