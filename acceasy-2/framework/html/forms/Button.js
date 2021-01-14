import Element from '../Element.js'

export default class Button extends Element {

    constructor(content) {
        super(Button.tagName, content)
        this.set('type', 'button')
    }

}

Button.tagName = 'button'

Button.buildFunctions = {

    button: (...content) => {
        return new Button(content)
    }

}