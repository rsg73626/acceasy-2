import Element from '../Element.js'

export default class Caption extends Element {

    constructor(content) {
        super(Caption.tagName, content)
    }

}

Caption.tagName = 'caption'

Caption.buildFunctions = {

    caption: (...content) => {
        return new Caption(content)
    }

}