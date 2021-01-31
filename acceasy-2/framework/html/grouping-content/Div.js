import Element from '../Element.js'

export default class Div extends Element {

    constructor(content) {
        super(Div.tagName, content, true, true, true)
    }

}

Div.tagName = 'div'

Div.buildFunctions = {

    div: (...content) => {
        return new Div(content)
    }

}