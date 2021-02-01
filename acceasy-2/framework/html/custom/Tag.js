import Element from '../Element.js'

export default class Tag extends Element {

    constructor(name, content = null) {
        super(name, content)
    }

}

Tag.buildFunctions = {

    tag: (name, ...content) => {
        return new Tag(name, content)
    }

}