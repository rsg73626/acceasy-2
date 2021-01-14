import Element from '../Element.js'

export default class Table extends Element {

    constructor(content) {
        super(Table.tagName, content)
    }

}

Table.tagName = 'table'

Table.buildFunctions = {

    table: (...content) => {
        return new Table(content)
    }

}