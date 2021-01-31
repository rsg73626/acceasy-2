import Element from '../Element.js'

export default class Dl extends Element {

    constructor(content) {
        super(Dl.tagName, content, true, true, true)
    }

}

Dl.tagName = 'dl'

Dl.buildFunctions = {

    dl: (...content) => {
        return new Dl(content)
    }

}