import Element from '../Element.js'

export default class Rp extends Element {

    constructor(content = null) {
        super(Rp.tagName, content, true, true, true)
    }

}

Rp.tagName = 'rp'

Rp.buildFunctions = {

    rp: (...content) => {
        return new Rp(content)
    }

}