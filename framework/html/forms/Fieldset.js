import Element from '../Element.js'
import Legend from './Legend.js'

export default class Fieldset extends Element {

    constructor(content) {
        super(Fieldset.tagName, content)
    }

}

Fieldset.tagName = 'fieldset'

Fieldset.buildFunctions = {

    fieldset: (legend, ...content) => {
        const lgd = acceasy.type.isString(legend) ? (new Legend(legend)) : legend
        return new Fieldset([lgd, content])
    }

}