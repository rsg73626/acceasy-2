import Element from '../Element.js'

export default class Dd extends Element {

    constructor(content) {
        super(Dd.tagName, content, true, false, true)
    }

}

Dd.tagName = 'dd'

Dd.buildFunctions = {

    dd: (...content) => {
        return new Dd(content)
    }

}