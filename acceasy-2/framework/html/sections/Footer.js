import Element from '../Element.js'

export default class Footer extends Element {

    constructor(content = null) {
        super(Footer.tagName, content)
    }

}

Footer.tagName = 'footer'

Footer.buildFunctions = {

    footer: (...content) => {
        return new Footer(content)
    }
    
}