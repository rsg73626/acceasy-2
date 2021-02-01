import Element from '../Element.js'

export default class Var extends Element {

    constructor(content) {
        super(Var.tagName, content, true, false, true)
    }

}

Var.tagName = 'var'

Var.buildFunctions = {

    variable: (...content) => {
        return new Var(content)
    }

}