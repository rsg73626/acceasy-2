import Element from '../Element.js'

export default class Rt extends Element {

    constructor(content = null) {
        super(Rt.tagName, content, true, true, true)
    }

}

Rt.tagName = 'rt'

Rt.buildFunctions = {

    rt: (...content) => {
        return new Rt(content)
    }

}