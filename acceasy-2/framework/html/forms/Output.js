import Element from '../Element.js'


export default class Output extends Element {

    constructor(content, name, forId) {
        super(Output.tagName, content, true, true)
        this.name(name)
        this.forId(forId)
    }

    name(value) {
        if (acceasy.type.isString(value) || value == null) {
            this.set('name', value)
        }
        return this
    }

    forId(value) {
        if (acceasy.type.isString(value)) {
            this.set('for', value)
        }
        return this
    }

}

Output.tagName = 'output'

Output.buildFunctions = {

    output: (name, forId, ...content) => {
        return new Output(content, name, forId)
    }

}