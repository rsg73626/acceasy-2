import Element from '../Element.js'

export default class Section extends Element {

    constructor(content = null) {
        super(Section.tagName, content)
    }

}

Section.tagName = 'section'

Section.buildFunctions = {

    section: (...content) => {
        return new Section(content)
    }

}