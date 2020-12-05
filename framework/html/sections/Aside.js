import Element from '../Element.js'

export default class Aside extends Element {

    constructor(content = null) {
        super(Aside.tagName, content)
    }

}

Aside.tagName = 'aside'

Aside.buildFunctions = {

    aside: (...content) => {
        return new Aside(content)
    }

}