import Element from '../Element.js'

export default class U extends Element {

    constructor(content) {
        super(U.tagName, content, true, false, true)
    }

}

U.tagName = 'u'

U.buildFunctions = {

    u: (...content) => {
        return new U(content)
    }

}