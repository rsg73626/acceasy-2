import Element from '../Element.js'

export default class Small extends Element {

    constructor(content = null) {
        super(Small.tagName, content, true, false, true)
    }

}

Small.tagName = 'small'

Small.buildFunctions = {

    small: (...content) => {
        return new Small(content)
    }

}