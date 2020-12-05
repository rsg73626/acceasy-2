import Element from '../Element.js'

export default class Colgroup extends Element {

    constructor(content) {
        super(Colgroup.tagName, content)
    }

}

Colgroup.tagName = 'colgroup'

Colgroup.buildFunctions = {

    colgroup: (...content) => {
        return new Colgroup(content)
    }

}