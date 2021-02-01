import Element from '../Element.js'

export default class Tbody extends Element {

    constructor(content) {
        super(Tbody.tagName, content)
    }

}

Tbody.tagName = 'tbody'

Tbody.buildFunctions = {

    tbody: (...content) => {
        return new Tbody(content)
    }

}