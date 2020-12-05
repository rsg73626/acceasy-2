import Element from '../Element.js'

export default class Acronym extends Element {

    constructor(content, title) {
        super(Acronym.tagName, content, true, false, true)
        this.title(title)
    }

    title(value) {
        if(acceasy.type.isString(value) || acceasy.type.isNumber(value)) {
            this.set('title', value)
        }
        return this
    }

}

Acronym.tagName = 'acronym'

Acronym.buildFunctions = {

    acronym: (title, ...content) => {
        return new Acronym(content, title)
    }

}