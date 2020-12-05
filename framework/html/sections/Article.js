import Element from '../Element.js'

export default class Article extends Element {

    constructor(content = null) {
        super(Article.tagName, content)
    }

}

Article.tagName = 'article'

Article.buildFunctions = {

    article: (...content) => {
        return new Article(content)
    }

}