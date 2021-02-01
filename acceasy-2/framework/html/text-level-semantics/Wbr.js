import Element from '../Element.js'

export default class Wbr extends Element {

    constructor() {
        super(Wbr.tagName, null, false, true, false, [])
    }

}

Wbr.tagName = 'wbr'

Wbr.buildFunctions = {

    wbr: () => {
        return new Wbr()
    }

}