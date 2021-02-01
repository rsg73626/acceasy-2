import Element from '../Element.js'

export default class Title extends Element {

    constructor(content) {
        super(Title.tagName, content, true, false, false)
    }

    build(stopIfError) {
        document.title = this.content.join('')
    }

}

Title.tagName = 'title'

Title.buildFunctions = {

    title: (...content) => {
        return new Title(content)
    }

}