import Element from '../Element.js'

export default class Nav extends Element {

    constructor(content = null) {
        super(Nav.tagName, content)
    }

}

Nav.tagName = 'nav'

Nav.buildFunctions = {

    nav: (...content) => {
        return new Nav(content)
    }

}