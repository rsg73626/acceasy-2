import Element from '../Element.js'

export default class Q extends Element {

    constructor(content) {
        super(Q.tagName, content, true, false, true)
    }

}

Q.tagName = 'q'

Q.buildFunctions = {

    q: (...content) => {
        return new Q(content)
    }

}