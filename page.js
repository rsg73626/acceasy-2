import Element from './framework/html/Element.js'
import Style from './framework/html/document-metadata/Style.js'

class Page extends Element {

    constructor(lang) {
        super('body', [], true, true, true, ['string', 'number'])
        
        this.lang(lang)
        this.tag = document.body
        this.head = document.head
        
        this.styleVars = new Style()
        this.styleVals = new Style()
        this.defaultCSSVarScope = 'body'

        acceasy.currentPage = this
    }

    body(...content) {
        this.content = acceasy.array.isSimple(content) ? content : acceasy.array.simplify(content)
        return this
    }

    style(selector, ...props) { //console.log(`Page will set style. Selector: ${selector}. Properties: ${props}.`)
        if (props.length >= 2) {
            for (var i = 0; i < props.length - 1; i += 2) {
                this.styleVals.style(selector, props[i], props[i + 1])
            }
        }
        return this
    }

    setDefaultCSSVarScope(scope) {
        this.defaultCSSVarScope = scope
        return this
    }

    cssVar(...vars) {
        if (vars.length >= 2) {
            for (var i = 0; i < vars.length - 1; i += 2) {
                this.styleVars.style(this.defaultCSSVarScope, vars[i], vars[i + 1])
            }
        }
        return this
    }

    build(stopIfError) {
        super.build(stopIfError)

        if (this.successBuild || (!stopIfError && this.tag != null)) {

            // Setting default style
            this.style('html, body', 'margin', 0, 'padding', 0)
            this.style('html', 'width', '100%', 'height', '100%')
            this.style('body', 'width', '100%', 'height', '100%', 'font-family', 'Arial', 'color', 'black')
            this.style('h1, h2, h3, h4, h5, h6', 'margin', '10px 0')
            this.style('h2, h3, h4, h5, h6', 'font-weight', 'normal')

            this.styleVars.build()
            if (this.styleVars.successBuild) {
                this.head.append(this.styleVars.tag)
            }
            
            this.styleVals.build()
            if (this.styleVals.successBuild) {
                this.head.append(this.styleVals.tag)
            }
        }
    }
}

export default (lang) => {
    return new Page(lang)
}

/*

CONFIGURATIONS

lang
metas
title

DEV OPTION TO SEE LAYOUT INDICATIONS

*/