import Element from '../Element.js'

export default class Main extends Element {

    constructor(content = null) {
        super('main', content)
    }

}

Main.tagName = 'main'

Main.buildFunctions = {

    main: (...content) => {
        return new Main(content)
    }

}