import Element from '../Element.js'

export default class Sup extends Element {

    constructor(content) {
        super(Sup.tagName, content, true, false, true)
    }

}

Sup.tagName = 'sup'

Sup.buildFunctions = {

    sup: (...content) => {
        return new Sup(content)
    }

}