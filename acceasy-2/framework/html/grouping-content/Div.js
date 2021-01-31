import Element from '../Element.js'

export default class Div extends Element {

    constructor(content = null) {
        super(Div.tagName, content)
    }

}

Div.tagName = 'div'

Div.buildFunctions = {

    div: (...content) => {
        return new Div(content)
    }

}