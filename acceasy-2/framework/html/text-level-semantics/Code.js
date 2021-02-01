import Element from '../Element.js'

export default class Code extends Element {

    constructor(content) {
        super(Code.tagName, content, true, false, false)
    }

}

Code.tagName = 'code'

Code.buildFunctions = {

    code: (...content) => {
        return new Code(content)
    }

}