import Element from '../Element.js'

export default class Rb extends Element {

    constructor(content = null) {
        super(Rb.tagName, content, true, true, true)
    }

}

Rb.tagName = 'rb'

Rb.buildFunctions = {

    rb: (...content) => {
        return new Rb(content)
    }

}