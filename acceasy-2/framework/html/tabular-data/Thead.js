import Element from '../Element.js'

export default class Thead extends Element {

    constructor(content) {
        super(Thead.tagName, content)
    }

}

Thead.tagName = 'thead'

Thead.buildFunctions = {

    thead: (...content) => {
        return new Thead(content)
    }

}