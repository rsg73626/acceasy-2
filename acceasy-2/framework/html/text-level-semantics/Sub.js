import Element from '../Element.js'

export default class Sub extends Element {

    constructor(content = null) {
        super(Sub.tagName, content, true, false, true)
    }

}

Sub.tagName = 'sub'

Sub.buildFunctions = {

    sub: (...content) => {
        return new Sub(content)
    }

}