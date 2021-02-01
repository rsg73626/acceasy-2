import Element from '../Element.js'


export default class A extends Element {

    constructor(content, href = '#') {
        super(A.tagName, content)
        this.href(href)
    }

    href(value) {
        this.set('href', value)
        return this
    }

}

A.tagName = 'a'

A.buildFunctions = {

    a: (href, ...content) => {
        return new A(content, href)
    }

}