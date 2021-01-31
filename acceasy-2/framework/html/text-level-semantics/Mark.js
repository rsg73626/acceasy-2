import Element from '../Element.js'

export default class Mark extends Element {

    constructor(content) {
        super(Mark.tagName, content, true, false, true)
    }

}

Mark.tagName = 'mark'

Mark.buildFunctions = {

    mark: (...content) => {
        return new Mark(content)
    }

}