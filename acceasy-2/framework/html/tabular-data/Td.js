import Element from '../Element.js'

export default class Td extends Element {

    constructor(content) {
        super('td', content)
    }

}

Td.tagName = 'td'

Td.buildFunctions = {

    td: (...content) => {
        return new Td(content)
    }

}