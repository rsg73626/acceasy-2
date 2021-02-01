import Element from '../Element.js'


export default class Link extends Element {

    constructor(content, href) {
        super(Link.tagName, content)
        this.href(href)
    }
    
    href(value) {
        this.set('href', value)
        return this
    }
    
    crossorigin(value) {
        this.set('crossorigin', value)
        return this
    }
    
    rel(value) {
        this.set('rel', value)
        return this
    }
    
    rev(value) {
        this.set('rev', value)
        return this
    }
    
    media(value) {
        this.set('media', value)
        return this
    }
    
    nonce(value) {
        this.set('nonce', value)
        return this
    }
    
    hreflang(value) {
        this.set('hreflang', value)
        return this
    }
    
    type(value) {
        this.set('type', value)
        return this
    }
    
    referrerpolicy(value) {
        this.set('referrerpolicy', value)
        return this
    }
    
    sizes(value) {
        this.set('sizes', value)
        return this
    }

}

Link.tagName = 'link'

Link.buildFunctions = {

    link: (href, ...content) => {
        return new Link(content, href)
    }

}