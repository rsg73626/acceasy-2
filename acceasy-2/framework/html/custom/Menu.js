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

    backgroundColor(value) {
        if (util.type.isString(value)) {
            this.style('--menu-background-color', value)
        }
        return this
    }

    backgroundColorHover(value) {
        if (util.type.isString(value)) {
            this.style('--menu-background-color-hover', value)
        }
        return this
    }

    textColor(value) {
        if (util.type.isString(value)) {
            this.style('--menu-text-color', value)
        }
        return this
    }

    textColorHover(value) {
        if (util.type.isString(value)) {
            this.style('--menu-text-color-hover', value)
        }
        return this
    }

    submenuBackgroundColor(value) {
        if (util.type.isString(value)) {
            this.style('--submenu-background-color', value)
        }
        return this
    }

    submenuBackgroundColorHover(value) {
        if (util.type.isString(value)) {
            this.style('--submenu-background-color-hover', value)
        }
        return this
    }

    submenuTextColor(value) {
        if (util.type.isString(value)) {
            this.style('--submenu-text-color', value)
        }
        return this
    }

    submenuTextColorHover(value) {
        if (util.type.isString(value)) {
            this.style('--submenu-text-color-hover', value)
        }
        return this
    }

    build(stopIfError) {
        this.cls(this.menuSize)
        super.build(stopIfError)
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