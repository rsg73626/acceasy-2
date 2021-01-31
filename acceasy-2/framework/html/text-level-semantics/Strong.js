import Element from '../Element.js'

export default class Strong extends Element {

    constructor(content) {
        super(Strong.tagName, content, true, false, true)
    }

}

Strong.tagName = 'strong'

Strong.buildFunctions = {

    strong: (...content) => {
        return new Strong(content)
    }

}