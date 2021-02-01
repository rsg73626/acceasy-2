import Element from '../Element.js'

export default class Tr extends Element {

    constructor(content) {
        super(Tr.tagName, content)
    }

}

Tr.tagName = 'tr'

Tr.buildFunctions = {

    tr: (...content) => {
        return new Tr(content) 
    }

}