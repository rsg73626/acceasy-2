import Element from '../Element.js'

export default class Br extends Element {

    constructor() {
        super(Br.tagName, null, false, true, false, [])
    }

}

Br.tagName = 'br'

Br.buildFunctions = {

    br: () => {
        return new Br()
    }

}