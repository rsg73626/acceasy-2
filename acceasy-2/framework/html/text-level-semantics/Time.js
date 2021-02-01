import Element from '../Element.js'

export default class Time extends Element {

    constructor(content) {
        super(Time.tagName, content, true, false, true)
    }

}

Time.tagName = 'time'

Time.buildFunctions = {

    time: (...content) => {
        return new Time(content)
    }

}