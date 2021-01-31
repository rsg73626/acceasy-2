import Element from '../Element.js'

export default class S extends Element {

    constructor(content) {
        super(S.tagName, content, true, false, true)
    }

}

S.tagName = 's'

S.buildFunctions = {

    s: (...content) => {
        return new S(content)
    }

}