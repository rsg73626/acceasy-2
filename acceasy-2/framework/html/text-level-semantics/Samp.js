import Element from '../Element.js'

export default class Samp extends Element {

    constructor(content) {
        super(Samp.tagName, content, true, false, true)
    }

}

Samp.tagName = 'samp'

Samp.buildFunctions = {

    samp: (...content) => {
        return new Samp(content)
    }

}