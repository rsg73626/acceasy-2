import Element from '../Element.js'

export default class Header extends Element {

    constructor(content = null) {
        super(Header.tagName, content)
    }

}

Header.tagName = 'header'

Header.buildFunctions = {

    header: (...content) => {
        return new Header(content)
    }
    
}