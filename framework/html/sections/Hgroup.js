import Element from '../Element.js'

export default class Hgroup extends Element {

    constructor(content) {
        super(Hgroup.tagName, content, true, false, true, [])
    }

}

Hgroup.tagName = 'hgroup'

Hgroup.buildFunctions = {

    hgroup: (...content) => {
        return new Hgroup(content)
    }

}