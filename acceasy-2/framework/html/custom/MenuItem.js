import Element from '../Element.js'
import A from '../text-level-semantics/A.js'
import I from '../text-level-semantics/I.js'
import Ul from '../grouping-content/Ul.js'
import MenuIconPosition from '../../enum/MenuIconPosition.js'

if (!acceasy.didSetKeys) {
    acceasy.keys = {
        left_arrow: 37,
        up_arrow: 38,
        right_arrow: 39,
        down_arrow: 40,
        tab: 9,
        esc: 27,
        enter: 13,
        space: 32
    }

    acceasy.didSetKeys = true
}

if (!acceasy.didSetMenuItemFunctions) {
    acceasy.framework.menuitem =  { }

    acceasy.framework.menuitem.isSubmenuExpanded = (item) => {
        return item.lastChild.style.display == 'block'
    }
    
    acceasy.framework.menuitem.setExpandIcon = (icon) => {
        if (!icon) { return }
        icon.classList.remove('fa-chevron-up')
        icon.classList.add('fa-chevron-down')
    }
    
    acceasy.framework.menuitem.setShrinkIcon = (icon) => {
        if (!icon) { return }
        icon.classList.remove('fa-chevron-down')
        icon.classList.add('fa-chevron-up')
    }
    
    acceasy.framework.menuitem.expandMenu = (item, isHoverAction, updateFocus) => {
        const link = item.firstChild
        const shrinkExpandIcon = link.getElementsByClassName('acceasy-menuitem-icon-suboptions')[0]
        const submenu = item.lastChild
        submenu.style.display = 'block'
        acceasy.framework.menuitem.setShrinkIcon(shrinkExpandIcon)
        if (isHoverAction) {
            item.style.background = 'var(--menu-background-color-hover)'
            link.style.color = 'var(--menu-text-color-hover)'
        }
        if (updateFocus) {
            const firstSubmenuItem = submenu.firstChild
            const firstSubmenuLink = firstSubmenuItem.firstChild
            firstSubmenuLink.focus()
            link.setAttribute('aria-expanded', 'true')
        } else {
            link.setAttribute('aria-expanded', 'true')
        }
    }
    
    acceasy.framework.menuitem.shrinkMenu = (item, isHoverAction, updateFocus) => {
        const link = item.firstChild
        const shrinkExpandIcon = link.getElementsByClassName('acceasy-menuitem-icon-suboptions')[0]
        const submenu = item.lastChild
        submenu.style.display = 'none'
        acceasy.framework.menuitem.setExpandIcon(shrinkExpandIcon)
        link.setAttribute('aria-expanded', 'false')
        if (isHoverAction) {
            item.style.background = 'var(--menu-background-color)'
            link.style.color = 'var(--menu-text-color)'
        }
        if (updateFocus) {
            link.focus()
        }
    }
    
    acceasy.framework.menuitem.subMenuItemOnKeyDown = (item, link, parent, keycode) => {
        const menuItemWithSuboptions = parent.parentElement
        const allMenuItems = parent.children
        const amountOfMenuItems = allMenuItems.length
        const indexOfMenuItem = Array.prototype.slice.call(allMenuItems).indexOf(item)
        if (keycode == acceasy.keys.down_arrow) {
            if (indexOfMenuItem < amountOfMenuItems-1) {
                const nextMenuItemLink = allMenuItems[indexOfMenuItem+1].firstChild
                nextMenuItemLink.focus()
            } else {
                const nextMenuItemLink = allMenuItems[0].firstChild
                nextMenuItemLink.focus()
            }
        } else if (keycode == acceasy.keys.up_arrow) {
            if (indexOfMenuItem > 0) {
                const nextMenuItemLink = allMenuItems[indexOfMenuItem-1].firstChild
                nextMenuItemLink.focus()
            } else {
                const nextMenuItemLink = allMenuItems[amountOfMenuItems-1].firstChild
                nextMenuItemLink.focus()
            }
        } else if (keycode == acceasy.keys.right_arrow || keycode == acceasy.keys.left_arrow) {
            acceasy.framework.menuitem.submenuItemOnKeyDownLeftOrRight(
                menuItemWithSuboptions, 
                menuItemWithSuboptions.firstChild, 
                menuItemWithSuboptions.parentElement, 
                keycode)
        } else if (keycode == acceasy.keys.esc) {
            acceasy.framework.menuitem.shrinkMenu(menuItemWithSuboptions, false, true)
        }
    }
    
    acceasy.framework.menuitem.submenuItemOnKeyDownLeftOrRight = (item, link, parent, keycode) => {
        const menuItems = parent.children
        const amountOfMenuItems = menuItems.length
        const indexOfMenuItem = Array.prototype.slice.call(menuItems).indexOf(item)
        var next
        if (keycode == acceasy.keys.right_arrow) {
            if (indexOfMenuItem < amountOfMenuItems-1) {
                next = menuItems[indexOfMenuItem+1]
            } else {
                next = menuItems[0]
            }
        } else if (keycode == acceasy.keys.left_arrow) {
            if (indexOfMenuItem > 0) {
                next = menuItems[indexOfMenuItem-1]
            } else {
                next = menuItems[amountOfMenuItems-1]
            }
        }
        if (next.classList.contains('acceasy-menuitem-with-suboptions')) {
            acceasy.framework.menuitem.expandMenu(next, false, false)
        } 
        next.firstChild.focus()
        acceasy.framework.menuitem.shrinkMenu(item, false, false)
    }
    
    acceasy.framework.menuitem.menuItemWithSuboptionsOnKeyDown = (item, link, parent, keycode) => {
        if (keycode == acceasy.keys.left_arrow || keycode == acceasy.keys.right_arrow) {
            acceasy.framework.menuitem.menuItemRootOnKeyDown(item, link, parent, keycode)
        } else {
            const shrinkExpandIcon = link.getElementsByClassName('acceasy-menuitem-icon-suboptions')[0]
            const submenu = item.lastChild
            const allSubmenuItems = submenu.children
            const amountOfSubmenuItems = allSubmenuItems.length
            const submenuFirstItem = allSubmenuItems[0]
            const submenuFirstLink = submenuFirstItem.firstChild
            const submenuLastItem = allSubmenuItems[amountOfSubmenuItems-1]
            const submenuLastLink = submenuLastItem.firstChild
            if ((keycode == acceasy.keys.esc) && acceasy.framework.menuitem.isSubmenuExpanded(item)) {
                submenu.style.display = 'none'
                link.setAttribute('aria-expanded', 'false')
                acceasy.framework.menuitem.setExpandIcon(shrinkExpandIcon)
            } else if (keycode == acceasy.keys.down_arrow || keycode == acceasy.keys.enter || keycode == acceasy.keys.space) {
                submenu.style.display = 'block'
                acceasy.framework.menuitem.setShrinkIcon(shrinkExpandIcon)
                submenuFirstLink.focus()
                link.setAttribute('aria-expanded', 'true')
                item.removeAttribute('onkeydown')
            } else if (keycode == acceasy.keys.up_arrow) {
                submenu.style.display = 'block'
                acceasy.framework.menuitem.setShrinkIcon(shrinkExpandIcon)
                submenuLastLink.focus()
                link.setAttribute('aria-expanded', 'true')
                item.removeAttribute('onkeydown')
            }
        }
    }
    
    acceasy.framework.menuitem.menuItemRootOnKeyDown = (item, link, parent, keycode) => {
        const menuItems = parent.children
        const amountOfMenuItems = menuItems.length
        const indexOfMenuitem = Array.prototype.slice.call(menuItems).indexOf(item)
        var next
        if (keycode == acceasy.keys.right_arrow) {
            if (indexOfMenuitem < amountOfMenuItems-1) {
                next = menuItems[indexOfMenuitem+1]
            } else {
                next = menuItems[0]
            }
        } else if (keycode == acceasy.keys.left_arrow) {
            if (indexOfMenuitem > 0) {
                next = menuItems[indexOfMenuitem-1]
            } else {
                next = menuItems[amountOfMenuItems-1]
            }
        } 
        if (acceasy.type.isObject(next)) {
            next.firstChild.focus()
        }
    }
    
    acceasy.framework.menuitem.itemOnKeyDown = (item, event) => {
        const keycode = event.keyCode
        const link = item.firstChild
        const parent = item.parentElement
    
        if (parent.classList.contains('acceasy-submenu-list')) {
            acceasy.framework.menuitem.subMenuItemOnKeyDown(item, link, parent, keycode)
        } else if (item.classList.contains('acceasy-menuitem-with-suboptions')) {
            acceasy.framework.menuitem.menuItemWithSuboptionsOnKeyDown(item, link, parent, keycode)
        } else {
            acceasy.framework.menuitem.menuItemRootOnKeyDown(item, link, parent, keycode)
        }
    }
    
    acceasy.framework.menuitem.itemOnMouseOver = (item) => {
        acceasy.framework.menuitem.expandMenu(item, true)
    }
    
    acceasy.framework.menuitem.itemOnMouseLeave = (item) => {
        acceasy.framework.menuitem.shrinkMenu(item, true)
    }
    
    acceasy.framework.menuitem.linkWithSuboptionsOnclick = (link) => {
        if (acceasy.framework.menuitem.isSubmenuExpanded(link.parentElement)) {
            acceasy.framework.menuitem.shrinkMenu(link.parentElement, false, true)
        } else {
            acceasy.framework.menuitem.expandMenu(link.parentElement, false, true)
        }
    }
    
    acceasy.framework.menuitem.linkOnFocus = (link) => {
        const menuItem = link.parentElement
        if (menuItem.classList.contains('acceasy-menuitem-with-suboptions')) {
            menuItem.setAttribute('onkeydown', 'acceasy.framework.menuitem.itemOnKeyDown(this, event)')
        }
    }

    acceasy.didSetMenuItemFunctions = true
}

export default class MenuItem extends Element {

    constructor(name, link, content) {
        var a = new A(name, link)

        super(MenuItem.tagName, a, true, false, true)

        this.link = a
        this.subMenu = content
        this.iconName = null
        this.iconPos = MenuIconPosition.left
        this.suboptionsIconPos = MenuIconPosition.right
        this.suboptionsIcon = true

        this.cls('acceasy-menuitem')
        this.set('role', 'none')
        this.set('onkeydown', 'acceasy.framework.menuitem.itemOnKeyDown(this, event)')

        a.cls('acceasy-menuitem-link')
        a.set('role', 'menuitem')
        a.set('tabindex', 0)
    }

    icon(name) {
        if (acceasy.type.isString(name)) {
            this.iconName = name
        }
        return this
    }

    iconPosition(value) {
        if (acceasy.object.contains(MenuIconPosition, value)) {
            this.iconPos = value
        }
        return this
    }

    addSuboptionsIcon(position = null) {
        this.suboptionsIcon = true
        return this.suboptionsIconPosition(position)
    }

    removeSuboptionsIcon() {
        this.suboptionsIcon = false
        return this
    }

    suboptionsIconPosition(value) {
        if (acceasy.object.contains(MenuIconPosition, value)) {
            this.suboptionsIconPos = value
        }
        return this
    }

    backgroundColor(value) {
        if (acceasy.type.isString(value)) {
            this.style('--menu-background-color', value, 'background', 'var(--menu-background-color)')
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
     * Configures the menu item colors for `background`, `background:hover`, `text`, `text:hover`, `submenu-background`, `submenu-background:hover`, `submenu-text`, `submenu-text:hover`.
     * It overwrites the menu configurations.
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
        if (this.iconName) {
            const iTag = new I()
            iTag.cls('acceasy-menuitem-icon')
            iTag.cls(this.iconName)
            iTag.set('aria-hidden', "true")
            if (this.iconPos == MenuIconPosition.left) {
                this.link.content = [iTag, this.link.content]
            } else {
                this.link.content = [this.link.content, iTag]
            }
            this.link.cls(`acceasy-menuitem-link-icon-${this.iconPos}`)
        }

        if (!acceasy.array.isEmpty(this.subMenu)) {
            this.cls('acceasy-menuitem-with-suboptions', true)
            this.set('onmouseover', 'acceasy.framework.menuitem.itemOnMouseOver(this)')
            this.set('onmouseleave', 'acceasy.framework.menuitem.itemOnMouseLeave(this)')

            this.link.set('aria-haspopup', 'true')
            this.link.set('aria-expanded', 'false')
            this.link.set('onclick', 'acceasy.framework.menuitem.linkWithSuboptionsOnclick(this)')
            this.link.set('onfocus', 'acceasy.framework.menuitem.linkOnFocus(this)')

            if (this.suboptionsIcon) {
                const iTag = new I()
                iTag.cls('fa fa-chevron-down fa-lg')
                iTag.cls('acceasy-menuitem-icon-suboptions')
                iTag.set('aria-hidden', "true")

                var pos = this.suboptionsIconPos
                if (this.iconName && pos == this.iconPos) {
                    pos = this.iconPos == MenuIconPosition.left ? MenuIconPosition.right : MenuIconPosition.left
                }

                if (pos == MenuIconPosition.left) {
                    this.link.content = acceasy.type.isArray(this.link.content) ? [iTag, ...this.link.content] : [iTag, this.link.content]
                } else {
                    this.link.content = acceasy.type.isArray(this.link.content) ? [...this.link.content, iTag] : [this.link.content, iTag]
                }

                if (this.iconName) {
                    this.link.cls(`acceasy-menuitem-link-icon-both`)
                } else {
                    this.link.cls(`acceasy-menuitem-link-icon-${pos}`)
                }
            }

            const ul = new Ul(this.subMenu)
            ul.cls('acceasy-submenu-list')
            ul.set('aria-label', this.link.content)

            this.content = [this.content, ul]
        }

        super.build(stopIfError)

    }

}

MenuItem.tagName = 'li'

MenuItem.buildFunctions = {

    menuItem: (name, link = '#', ...content) => {
        return new MenuItem(name, link, content)
    },

    mi: (name, link = '#', ...content) => {
        return new MenuItem(name, link, content)
    }

}