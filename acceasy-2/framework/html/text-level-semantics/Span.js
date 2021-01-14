import Element from '../Element.js'

export default class Span extends Element {

    constructor(content = null) {
        super(Span.tagName, content, true, true, true, ['string', 'number'])
    }

}

Span.tagName = 'span'

Span.buildFunctions = {

    span: (...content) => {
        return new Span(content)
    }

}