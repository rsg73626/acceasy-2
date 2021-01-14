import Element from '../Element.js'

export default class Ul extends Element {

    constructor(content) {
        super(Ul.tagName, content, true, false, true)
    }

}

Ul.tagName = 'ul'

Ul.buildFunctions = {

    ul: (...content) => {
        return new Ul(content)
    }

}