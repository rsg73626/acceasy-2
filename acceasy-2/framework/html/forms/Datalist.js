import Element from '../Element.js'

export default class Datalist extends Element {

    constructor(content, id) {
        super(Datalist.tagName, content, true, false, true, [])
        this.id(id)
        this.visible = false
    }

}

Datalist.tagName = 'datalist'

Datalist.buildFunctions = {

    datalist: (id, ...content) => {
        return new Datalist(content, id)
    }

}