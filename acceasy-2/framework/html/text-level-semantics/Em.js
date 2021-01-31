import Element from '../Element.js'

export default class Em extends Element {

    constructor(content = null) {
        super(Em.tagName, content, true, false, true)
    }

}

Em.tagName = 'em'

Em.buildFunctions = {

    em: (...content) => {
        return new Em(content)
    }

}