import Element from '../Element.js'

export default class Acronym extends Element {

    constructor(content, title) {
        super(Acronym.tagName, content, true, false, true)
        this.title(title)
    }

}

Acronym.tagName = 'acronym'

Acronym.buildFunctions = {

    acronym: (title, ...content) => {
        return new Acronym(content, title)
    }

}