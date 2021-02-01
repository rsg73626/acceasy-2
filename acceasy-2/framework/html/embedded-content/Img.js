import Element from '../Element.js'


export default class Img extends Element {

    constructor(src, alt) {
        super(Img.tagName, null, false, true, false)
        this.src(src)
        this.alt(alt)
    }

    src(value) {
        if (acceasy.type.isString(value)) {
            this.set('src', value)
        }
        return this
    }

    alt(value) {
        if (acceasy.type.isString(value)) {
            this.set('alt', value)
        }
        return this
    }

}

Img.tagName = 'img'

Img.buildFunctions = {

    img: (src, alt = null) => {
        return new Img(src, alt)
    }

}