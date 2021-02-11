import Element from './framework/html/Element.js'
import Style from './framework/html/document-metadata/Style.js'
import html from './html.js'

acceasy.didBuildCurrentPage = false

class Page extends Element {

    constructor(lang) {
        super('body', [])
        
        this.tag = document.body
        this.headElement = document.head
        
        this.styleVars = new Style()
        this.styleVals = new Style()
        this.defaultCSSVarScope = 'html'

        acceasy.currentPage = this
        acceasy.dom.set(document.documentElement, { 'lang': lang })
    }

    head(...content) {
        content.forEach(element => {
            if (acceasy.type.isObject(element) && element.isElement) {
                element.build()
                if (element.successBuild) {
                    this.headElement.prepend(element.tag)
                }
            }
        })
        return this
    }

    body(...content) {
        this.content = acceasy.array.isSimple(content) ? content : acceasy.array.simplify(content)
        return this
    }

    style(selector, ...props) {
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
        if (acceasy.didBuildCurrentPage) {
            return
        }
        acceasy.didBuildCurrentPage = true

        super.build(stopIfError)

        if (this.successBuild || (!stopIfError && this.tag != null)) {
            this.styleVars.build()
            if (this.styleVars.successBuild) {
                this.headElement.append(this.styleVars.tag)
            }
            
            this.styleVals.build()
            if (this.styleVals.successBuild) {
                this.headElement.append(this.styleVals.tag)
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
        const page = new Page(lang)
        onload = () => {
            page.build()
            if (page.onload) {
                page.onload()
            }
        }
        return page
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