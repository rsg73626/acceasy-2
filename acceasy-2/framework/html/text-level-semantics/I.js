import Element from '../Element.js'

export default class I extends Element {

    constructor(content) {
        super(I.tagName, content, true, false, false)
    }

}

I.tagName = 'i'

I.buildFunctions = {

    i: (...content) => {
        return new I(content)
    }

}