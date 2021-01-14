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
        this.defaultCSSVarScope = 'html'

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