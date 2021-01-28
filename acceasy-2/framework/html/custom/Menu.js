import Element from '../Element.js'
import Button from '../forms/Button.js'
import Ul from '../grouping-content/Ul.js'
import MenuSize from '../../enum/MenuSize.js'

if (!acceasy.didSetMenuFunctions) {
    acceasy.framework.menu =  { }

    acceasy.framework.menu.buttonOnClick = (button) => {
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
        button.set('onclick', 'acceasy.framework.menu.buttonOnClick(this)')
    }

    size(value) {
        if (acceasy.object.contains(MenuSize, value)) {
            this.menuSize = value
        }
        return this
    }

    backgroundColor(value) {
        if (acceasy.type.isString(value)) {
            this.style('--menu-background-color', value)
        }
        return this
    }

    backgroundColorHover(value) {
        if (acceasy.type.isString(value)) {
            this.style('--menu-background-color-hover', value)
        }
        return this
    }

    textColor(value) {
        if (acceasy.type.isString(value)) {
            this.style('--menu-text-color', value)
        }
        return this
    }

    textColorHover(value) {
        if (acceasy.type.isString(value)) {
            this.style('--menu-text-color-hover', value)
        }
        return this
    }

    submenuBackgroundColor(value) {
        if (acceasy.type.isString(value)) {
            this.style('--submenu-background-color', value)
        }
        return this
    }

    submenuBackgroundColorHover(value) {
        if (acceasy.type.isString(value)) {
            this.style('--submenu-background-color-hover', value)
        }
        return this
    }

    submenuTextColor(value) {
        if (acceasy.type.isString(value)) {
            this.style('--submenu-text-color', value)
        }
        return this
    }

    submenuTextColorHover(value) {
        if (acceasy.type.isString(value)) {
            this.style('--submenu-text-color-hover', value)
        }
        return this
    }

    /**
     * Configures the menu colors for `background`, `background:hover`, `text`, `text:hover`, `submenu-background`, `submenu-background:hover`, `submenu-text`, `submenu-text:hover`.
     * @param  {...String} values The name of the colors to be used in any CSS valid color format.
     */
    colors(...values) {
        const colors = [...values, ...Array(8 - values.length).fill(null)]
        this.backgroundColor(colors[0])
        this.backgroundColorHover(colors[1])
        this.textColor(colors[2])
        this.textColorHover(colors[3])
        this.submenuBackgroundColor(colors[4])
        this.submenuBackgroundColorHover(colors[5])
        this.submenuTextColor(colors[6])
        this.submenuTextColorHover(colors[7])
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