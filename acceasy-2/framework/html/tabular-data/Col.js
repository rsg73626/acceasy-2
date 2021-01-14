import Element from '../Element.js'

export default class Col extends Element {

    constructor(content) {
        super(Col.tagName, content)
    }

}

Col.tagName = 'col'

Col.buildFunctions = {

    col: (...content) => {
        return new Col(content)
    }

}