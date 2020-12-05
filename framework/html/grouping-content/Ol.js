import Element from '../Element.js'

export default class Ol extends Element {

    constructor(content) {
        super(Ol.tagName, content, true, false, true)
    }

}

Ol.tagName = 'ol'

Ol.buildFunctions = {

    ol: (...content) => {
        return new Ol(content)
    }

}