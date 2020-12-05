import Element from '../Element.js'


export default class Legend extends Element {

    constructor(content) {
        super(Legend.tagName, content)
    }

}

Legend.tagName = 'legend'

Legend.buildFunctions = {

    legend: (...content) => {
        return new Legend(content)
    }

}