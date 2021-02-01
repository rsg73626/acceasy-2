import Element from '../Element.js'

export default class Dl extends Element {

    constructor(content = null) {
        super(Dl.tagName, content)
    }

}

Dl.tagName = 'dl'

Dl.buildFunctions = {

    dl: (...content) => {
        return new Dl(content)
    }

}