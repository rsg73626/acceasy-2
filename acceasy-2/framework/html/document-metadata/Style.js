import Element from '../Element.js'

export default class Style extends Element {

    constructor(content = null) {
        super(Style.tagName, content, true, true, false, ['string'])

        this.css = { }
    }

    style(selector, prop, value) {
        if (!acceasy.type.isString(selector) || !acceasy.type.isString(prop) || value == null) {
            return this
        }
        if (!this.css[selector]) {
            this.css[selector] = { }
        }
        this.css[selector][prop] = value
        return this
    }

    build(stopIfError) {
        super.build(stopIfError)

        if (this.successBuild || (!stopIfError && this.tag != null)) {
            for (var selector in this.css) {
                this.tag.append(`${selector} {\n`)
                for (var prop in this.css[selector]) {
                    this.tag.append(`   ${prop}: ${this.css[selector][prop]};\n`)
                }
                this.tag.append('}\n')
            }
        }
    }

}

Style.tagName = 'style'

Style.buildFunctions = {

    style: (...content) => {
        return new Style(content)
    }

}