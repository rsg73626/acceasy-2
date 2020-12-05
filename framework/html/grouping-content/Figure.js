import Element from '../Element.js'

export default class Figure extends Element {

    constructor(content) {
        super(Figure.tagName, content, true, false, true, [])
    }

    img(image) {
        if (image == null || !image.isElement) {
            return this
        }
        if (acceasy.type.isArray(this.content)) {
            this.content.push(image)
        } else {
            this.content = [this.content, image]
        }
        return this
    }

    caption(capt) {
        if (capt == null || !capt.isElement) {
            return this
        }
        if (acceasy.type.isArray(this.content)) {
            this.content.push(capt)
        } else {
            this.content = [this.content, capt]
        }
        return this
    }

}

Figure.tagName = 'figure'

Figure.buildFunctions = {

    figure: (...content) => {
        return new Figure(content)
    }

}