import Element from '../Element.js'

export default class B extends Element {

    constructor(content = null) {
        super(B.tagName, content, true, false, true)
    }

}

B.tagName = 'b'

B.buildFunctions = {

    b: (...content) => {
        return new B(content)
    }

}