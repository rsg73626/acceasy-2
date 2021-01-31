import Element from '../Element.js'


export default class Dfn extends Element {

    constructor(content) {
        super(Dfn.tagName, content, true, false, true)
        this.title(title)
    }

}

Dfn.tagName = 'dfn'

Dfn.buildFunctions = {

    dfn: (...content) => {
        return new Dfn(content)
    }

}