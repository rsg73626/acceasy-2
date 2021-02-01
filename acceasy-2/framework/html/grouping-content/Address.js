import Element from '../Element.js'

export default class Address extends Element {

    constructor(content) {
        super(Address.tagName, content, true, false, true)
    }

}

Address.tagName = 'address'

Address.buildFunctions = {

    address: (...content) => {
        return new Address(content)
    }

}