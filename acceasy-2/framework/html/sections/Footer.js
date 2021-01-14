import Element from '../Element.js'

export default class Footer extends Element {

    constructor(content = null) {
        super(Footer.tagName, content, true, true, true, ['string', 'number'])
    }

}

Footer.tagName = 'footer'

Footer.buildFunctions = {

    footer: (...content) => {
        return new Footer(content)
    }
    
}