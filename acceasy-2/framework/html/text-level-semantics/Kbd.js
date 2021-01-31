import Element from '../Element.js'

export default class Kbd extends Element {

    constructor(content = null) {
        super(Kbd.tagName, content, true, false, true)
    }

}

Kbd.tagName = 'kbd'

Kbd.buildFunctions = {

    kbd: (...content) => {
        return new Kbd(content)
    }

}