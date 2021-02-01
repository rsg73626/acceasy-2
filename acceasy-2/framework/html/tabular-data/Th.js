import Element from '../Element.js'

export default class Th extends Element {

    constructor(content) {
        super(Th.tagName, content)
    }

}

Th.tagName = 'th'

Th.buildFunctions = {

    th: (...content) => {
        return new Th(content)
    }

}