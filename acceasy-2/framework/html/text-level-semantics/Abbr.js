import Element from '../Element.js'


export default class Abbr extends Element {

    constructor(content, title) {
        super(Abbr.tagName, content, true, false, true)
        this.title(title)
    }

}

Abbr.tagName = 'abbr'

Abbr.buildFunctions = {
    abbreviation: (title, ...content) => new Abbr(content, title),
    abbr: (...content) => new Abbr(content)
}