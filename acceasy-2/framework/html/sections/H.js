import Element from '../Element.js'


export default class H extends Element {

    constructor(content = null, level = 1) {
        var lvl = acceasy.array.contains([1, 2, 3, 4, 5, 6], level) ? level : 1
        super(H.tagName(lvl), content)
    }

    level(value) {
        if (acceasy.array.contains([1, 2, 3, 4, 5, 6], value)) {
            this.tagName = `h${value}`
        }
        return this
    }

}

H.tagName = (lvl) => `h${lvl}`

H.buildFunctions = {

    h: (level, ...content) => {
        return new H(content, level)
    },
    
    h1: (...content) => {
        return new H(content, 1)
    },
    
    h2: (...content) => {
        return new H(content, 2)
    },
    
    h3: (...content) => {
        return new H(content, 3)
    },
    
    h4: (...content) => {
        return new H(content, 4)
    },
    
    h5: (...content) => {
        return new H(content, 5)
    },
    
    h6: (...content) => {
        return new H(content, 6)
    },
    
    subTitle: (...content) => {
        return new H(content, 2)
    },
    
    subSubTitle: (...content) => {
        return new H(content, 3)
    }

}