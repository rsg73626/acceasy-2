import Element from '../Element.js'

export default class Blockquote extends Element {

    constructor(content) {
        super(Blockquote.tagName, content, true, false, true)
    }

}

Blockquote.tagName = 'blockquote'

Blockquote.buildFunctions = {

    blockquote: (...content) => {
        return new Blockquote(content)
    }

}