import Element from '../Element.js'

export default class Rtc extends Element {

    constructor(content = null) {
        super(Rtc.tagName, content, true, true, true)
    }

}

Rtc.tagName = 'rtc'

Rtc.buildFunctions = {

    rtc: (...content) => {
        return new Rtc(content)
    }

}