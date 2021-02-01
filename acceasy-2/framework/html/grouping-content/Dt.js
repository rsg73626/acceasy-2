import Element from '../Element.js'

export default class Dt extends Element {

    constructor(content) {
        super(Dt.tagName, content, true, false, true)
    }

}

Dt.tagName = 'dt'

Dt.buildFunctions = {

    dt: (...content) => {
        return new Dt(content)
    }

}