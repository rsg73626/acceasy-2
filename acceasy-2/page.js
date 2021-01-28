import Element from './framework/html/Element.js'
import Style from './framework/html/document-metadata/Style.js'
import html from './html.js'

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

export default {

    /**
     * Use this function to create a new instance of an Acceasy page.
     * It automatically sets the Acceasy functions globally without namespace.
     * @param {String} lang Value for the attribute `lang` for the tag `<body>`.
     */
    newUsingLanguage: (lang) => {
        html.setElementsGlobally()
        return new Page(lang)
    },

    /**
     * Use this function to set the Acceasy funtions globally using a namespace or not.
     * It'll overwrite the default one.
     * @param {String} namespace 
     */
    setElementsGlobally: (namespace = null) => {
        html.setElementsGlobally(namespace)
    }

}