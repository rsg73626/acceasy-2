import Element from '../Element.js'

export default class Figcaption extends Element {

    constructor(content) {
        super(Figcaption.tagName, content, true, false, true)
    }

}

Figcaption.tagName = 'figcaption'

Figcaption.buildFunctions = {

    figcaption: (...content) => {
        return new Figcaption(content)
    }

}