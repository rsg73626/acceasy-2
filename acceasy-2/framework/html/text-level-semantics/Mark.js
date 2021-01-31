import Element from '../Element.js'

export default class Mark extends Element {

    constructor(content = null) {
        super(Mark.tagName, content, true, false, true)
    }

}

Mark.tagName = 'mark'

Mark.buildFunctions = {

    mark: (...content) => {
        return new Mark(content)
    }

}