import Element from '../Element.js'
import Button from '../forms/Button.js'
import Ul from '../grouping-content/Ul.js'
import MenuSize from '../../enum/MenuSize.js'
import util from '../../util/util.js'

if (!acceasy.didSetMenuFunctions) {
    acceasy.menu =  { }

    acceasy.menu.buttonOnClick = (button) => {
        const menu = button.nextSibling
        if (menu.style.display == 'grid') {
            menu.style.display = 'none'
            button.removeAttribute('aria-expanded')
        } else {
            menu.style.display = 'grid'
            button.setAttribute('aria-expanded', true)
        }
    }

    acceasy.didSetMenuFunctions = true
}

export default class Menu extends Element {

    constructor(content) {
        var button = new Button()
        var ul = new Ul(content)
        const menuContent = [button, ul]
        
        super(Menu.tagName, menuContent, true, false, true, [])

        this.menuSize = MenuSize.medium

        this.cls('acceasy-menu')
        this.set('aria-label', 'navigation menu') // It must be internationalized.

        ul.id(acceasy.getNewTagId())
        ul.cls('acceasy-menu-list')
        ul.set('role', 'menubar')

        button.cls('acceasy-menu-button')
        button.cls('fa fa-bars fa-lg')
        button.set('aria-haspopup', 'true')
        button.set('aria-controls', ul.getId())
        button.set('onclick', 'acceasy.menu.buttonOnClick(this)')
    }

    size(value) {
        if (util.object.contains(MenuSize, value)) {
            this.menuSize = value
        }
        return this
    }

    build(stopIfError) {
        this.cls(this.menuSize)
        super.build(stopIfError)

        // if (this.successBuild || (!stopIfError && this.tag != null)) {
        //     for (var selector in this.css) {
        //         this.tag.append(`${selector} {\n`)
        //         for (var prop in this.css[selector]) {
        //             this.tag.append(`   ${prop}: ${this.css[selector][prop]};\n`)
        //         }
        //         this.tag.append('}\n')
        //     }
        // }
    }

}

Menu.tagName = 'nav'

Menu.buildFunctions = {

    menu: (...content) => {
        return new Menu(content)
    },

    mn: (...content) => {
        return new Menu(content)
    }

}