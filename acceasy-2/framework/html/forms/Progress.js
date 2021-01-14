import Element from '../Element.js'

export default class Progress extends Element {

    constructor(content, value, max) {
        super(Progress.tagName, content)
        this.value(value)
        this.max(max)
    }

    value(val) {
        this.set('value', val)
        return this
    }

    max(value) {
        this.set('max', value)
        return this
    }

}

Progress.tagName = 'progress'

Progress.buildFunctions = {

    progress: (value, max, ...content) => {
        return new Progress(content, value, max)
    }

}