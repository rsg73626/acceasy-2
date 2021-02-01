import Element from '../Element.js'

export default class Hr extends Element {

    constructor() {
        super(Hr.tagName, null, false, true, false, [])
    }

}

Hr.tagName = 'hr'

Hr.buildFunctions = {

    hr: () => {
        return new Hr()
    }

}