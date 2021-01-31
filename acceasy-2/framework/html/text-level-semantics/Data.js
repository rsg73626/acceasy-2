import Element from '../Element.js'


export default class Data extends Element {

    constructor(content, value) {
        super(Data.tagName, content, true, false, true)
        this.value(value)
    }

    value(v) {
        if(acceasy.type.isString(v) || acceasy.type.isNumber(v)) {
            this.set('value', v)
        }
        return this
    }

}

Data.tagName = 'data'

Data.buildFunctions = {

    data: (value, ...content) => {
        return new Data(content, value)
    }

}