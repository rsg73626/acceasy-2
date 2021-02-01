import Element from '../Element.js'


export default class Base extends Element {

    constructor(content) {
        super(Base.tagName, content)
    }

    href(value) {
        this.set('href', value)
        return this
    }

    target(value) {
        this.set('target', value)
        return this
    }

}

Base.tagName = 'base'

Base.buildFunctions = {

    base: (...content) => {
        return new Base(content)
    }

}