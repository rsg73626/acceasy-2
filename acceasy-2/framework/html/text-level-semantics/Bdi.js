import Element from '../Element.js'

export default class Bdi extends Element {

    constructor(content) {
        super(Bdi.tagName, content, true, false, true)
    }

}

Bdi.tagName = 'bdi'

Bdi.buildFunctions = {

    bdi: (...content) => {
        return new Bdi(content)
    }

}