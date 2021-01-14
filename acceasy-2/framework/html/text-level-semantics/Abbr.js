import Element from '../Element.js'


export default class Abbr extends Element {

    constructor(content, title) {
        super(Abbr.tagName, content, true, false, true)
        this.title(title)
    }

    title(value) {
        if(acceasy.type.isString(value) || acceasy.type.isNumber(value)) {
            this.set('title', value)
        }
        return this
    }

}

Abbr.tagName = 'abbr'

Abbr.buildFunctions = {

    abbr: (title, ...content) => {
        return new Abbr(content, title)
    }

}