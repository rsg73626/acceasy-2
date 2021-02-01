import Element from '../Element.js'

export default class Pre extends Element {

    constructor(content) {
        super(Pre.tagName, content, true, false, true)
    }

}

Pre.tagName = 'pre'

Pre.buildFunctions = {

    pre: (...content) => {
        return new Pre(content)
    }

}