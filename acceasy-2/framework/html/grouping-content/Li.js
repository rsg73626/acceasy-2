import Element from '../Element.js'

export default class Li extends Element {

    constructor(content) {
        super(Li.tagName, content, true, false, true)
    }

}

Li.tagName = 'li'

Li.buildFunctions = {

    li: (...content) => {
        return new Li(content)
    }

}