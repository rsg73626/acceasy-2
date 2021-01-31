import Element from '../Element.js'

export default class Bdo extends Element {

    constructor(content = null) {
        super(Bdo.tagName, content, true, false, true)
    }

}

Bdo.tagName = 'bdo'

Bdo.buildFunctions = {

    bdo: (...content) => {
        return new Bdo(content)
    }

}