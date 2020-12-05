import Element from '../Element.js'

export default class P extends Element {

    constructor(content = null) {
        super(P.tagName, content, true, true, true, ['string', 'number'])
    }

}

P.tagName = 'p'

P.buildFunctions = {

    p: (...content) => {
        return new P(content)
    }

}