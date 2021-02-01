import Element from '../Element.js'


export default class Dfn extends Element {

    constructor(content) {
        super(Dfn.tagName, content, true, false, true)
    }

}

Dfn.tagName = 'dfn'

Dfn.buildFunctions = {

    dfn: (...content) => {
        return new Dfn(content)
    }

}