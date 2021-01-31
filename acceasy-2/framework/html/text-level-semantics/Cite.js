import Element from '../Element.js'

export default class Cite extends Element {

    constructor(content = null) {
        super(Cite.tagName, content, true, false, true)
    }

}

Cite.tagName = 'cite'

Cite.buildFunctions = {

    cite: (...content) => {
        return new Cite(content)
    }

}