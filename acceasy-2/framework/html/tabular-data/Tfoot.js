import Element from '../Element.js'

export default class Tfoot extends Element {

    constructor(content) {
        super(Tfoot.tagName, content)
    }

}

Tfoot.tagName = 'tfoot'

Tfoot.buildFunctions = {

    tfoot: (...content) => {
        return new Tfoot(content)
    }

}