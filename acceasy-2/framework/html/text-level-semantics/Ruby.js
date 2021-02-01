import Element from '../Element.js'

export default class Ruby extends Element {

    constructor(content = null) {
        super(Ruby.tagName, content)
    }

}

Ruby.tagName = 'ruby'

Ruby.buildFunctions = {

    ruby: (...content) => {
        return new Ruby(content)
    }

}