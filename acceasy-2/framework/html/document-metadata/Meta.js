import Element from '../Element.js'


export default class Meta extends Element {

    constructor(content) {
        super(Meta.tagName, content)
    }

    name(value) {
        this.set('name', value)
        return this
    }

    httpEquiv(value) {
        this.set('http-equiv', value)
        return this
    }

    content(value) {
        this.set('content', value)
        return this
    }

    charset(value) {
        this.set('charset', value)
        return this
    }

}

Meta.tagName = 'meta'

Meta.buildFunctions = {

    meta: (href, ...content) => {
        return new Meta(content, href)
    }

}