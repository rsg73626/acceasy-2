import '../util/global.js'

class Grid {

    constructor() {
        this.rowHeight = 'auto'
        this.columnWidth = 'auto'
        this.rowHeights = []
        this.columnWidths = []
        this.didSetGrid = false
        this.gridValues = []
    }

    grid(...values) {
        if (!acceasy.array.isEmpty(values)) {
            if (acceasy.type.isString(values[0])) {
                const grid = Grid.gridFromString(values[0])
                if (grid) {
                    this.gridValues = grid
                }
            } else {
                this.gridValues = values.map((v) => { return acceasy.type.isArray(v) ? v : [v] })
            }
            this.didSetGrid = true
        }
        return this
    }

    gridRowHeight(value) {
        if (acceasy.type.isString(value)) {
            this.rowHeight = value
        }
        return this
    }

    gridColumnWidth(value) {
        if (acceasy.type.isString(value)) {
            this.columnWidth = value
        }
        return this
    }

    gridRowHeights(...values) {
        if (!acceasy.array.isEmpty(values)) {
            const simplified = acceasy.array.simplify(values)
            if (!(simplified.findIndex((v) => { !acceasy.type.isString(v) }) > -1)) {
                this.rowHeights = simplified
            }
        }
        return this
    }

    gridColumnWidths(...values) {
        if (!acceasy.array.isEmpty(values)) {
            const simplified = acceasy.array.simplify(values)
            if (!(simplified.findIndex((v) => { !acceasy.type.isString(v) }) > -1)) {
                this.columnWidths = simplified
            }
        }
        return this
    }

    gridSize(columnWidth, rowHeight) {
        this.gridColumnWidth(columnWidth)
        this.gridRowHeight(rowHeight)
        return this
    }

    setGrid() {
        const rowHeight = this.rowHeight
        const columnWidth = this.columnWidth
        const rowHeights = this.rowHeights
        const columnWidths = this.columnWidths
        const page = acceasy.currentPage //;console.log('Grid. Current page: '); console.log(page)
        const element = this
        var content = this.content
        const didSetGrid = this.didSetGrid
        var gridValues = this.gridValues

        function gridError(message, prefix = 'Grid error') {
            console.error(`${prefix}: ${message}.`)
            return false
        }
        
        // Tem conteúdo.
        // Não é uma lista vázia.
        // Todos são Elementes.
        function validateContent() {
            if (!content) {
                return gridError('missing content')
            } else if (acceasy.type.isArray(content)) {
                if (acceasy.array.isEmpty(content)) {
                    return gridError('missing content. It must be a tag or a list of tags')
                }
                for (var i in content) {
                    var c = content[i] ?? {}
                    if (!(c.isElement)) {
                        return gridError(`invalid content: ${c}. All the contents must be tags`)
                    }
                }
            } else if (!content.isElement) {
                return gridError(`invalid content: ${content}. It must be a tag or a list of tags`)
            }
            return true
        }

        // Não é uma lista vazia.
        // Todos os valores estão entre 0 e a quantidade de tags.
        // Há um valor para cada tag.
        function validateGridValues() {
            if (acceasy.array.isEmpty(gridValues)) {
                return gridError('invalid values. It must be a not empty array')
            }
            for (var i in gridValues) {
                const line = gridValues[i]
                if (acceasy.array.isEmpty(line)) {
                    return this.gridError(`invalid value: ${line}. It must be a number or a not empty list of numbers between 1 and the amount of nested tags (${content.length ?? 1}). You also can use 0 to indicate an empty column`)
                }
                for (var j in line) {
                    const gridValue = line[j]
                    if (!acceasy.type.isNumber(gridValue) || gridValue < 0 || gridValue > (content.legth)) {
                        return gridError(`invalid value: ${gridValue}. It must be a number between 1 and the amount of nested tags (${content.length ?? 1}). You also can use 0 to indicate an empty column`)
                    }
    
                }
            }
            const simplifiedValues = acceasy.array.simplify(gridValues)
            const containsAll = Array(content.length).fill((i) => { return simplifiedValues.indexOf(i) > -1 }).map((f, i) => { return f(i + 1) }).reduce((a, c) => { return a && c })
            if (!containsAll) {
                return gridError('missing value')
            }
            return true
        }

        function isPossibleToSetGrid() {
            if (!didSetGrid) {
                return false
            }
            if (!page) {
                return gridError('missing page')
            }
            return true
        }

        function adjustGridValues() {
            const lengths = gridValues.map((line) => { return line.length })
            const sortedLengths = lengths.sort((a, b) => { return b - a })
            const maxColumns = sortedLengths[0]
            
            var gridValuesDefinedByUser = []
            gridValues.forEach((line) => {
                const newLine = line.filter((column) => { return column > 0 })
                if (!acceasy.array.isEmpty(newLine)) {
                    gridValuesDefinedByUser.push(line)
                }
            })
            gridValuesDefinedByUser = gridValuesDefinedByUser.map((line) => { return acceasy.array.fillWithLastValueUpToLength(line, maxColumns) })

            var gridValuesWithoutSpaces = []
            gridValues.forEach((line) => {
                const newLine = line.filter((column) => { return column > 0 })
                if (!acceasy.array.isEmpty(newLine)) {
                    gridValuesWithoutSpaces.push(newLine)
                }
            })
            gridValuesWithoutSpaces = gridValuesWithoutSpaces.map((line) => { return acceasy.array.fillWithLastValueUpToLength(line, maxColumns) })

            gridValues = {
                userDefined: gridValuesDefinedByUser,
                noSpaces: gridValuesWithoutSpaces
            }
        }

        function validateGridValuesA11y() {
            const errorPrefix = 'Grid accessibility error'
            const errorMessage = 'invalid value. It is not allowed to display the contents in an order differrent from the HTML tags because it is not good for accessibility'
    
            if (!acceasy.array.isAscending(gridValues.noSpaces[0].filter((v) => { return v > 0 }))) {
                return gridError(errorMessage, errorPrefix)
            }
    
            var last = gridValues.noSpaces[0][gridValues.noSpaces[0].length - 1]
    
            for (var line = 1; line < gridValues.userDefined.length; line++) {
                for (var col = 0; col < gridValues.userDefined[line].length; col++) {
                    const previous = gridValues.userDefined[line - 1][col]
                    const v = gridValues.userDefined[line][col]
                    if (v == 0) {
                        continue
                    }
                    if (v < last && v != previous) {
                        return gridError(errorMessage, errorPrefix)
                    }
                    last = v
                }
            }
    
            return true
        }

        function getNewTagId() {
            return `acceasy-auto-tag-id-${Grid.lastTagId++}`
        }
    
        function setMissingTagIds() {
            if (!element.getId()) {
                element.id(getNewTagId())
            }
            if (acceasy.type.isArray(content)) {
                content.forEach((c) => {
                    if (!c.getId()) {
                        c.id(getNewTagId())
                    }
                })
            } else if (!content.getId()) {
                content.id(getNewTagId())
            }
        }

        function setGridCSS() {
            const start = 'start'
            const end = 'end'
            const rows = gridValues.userDefined.length
            const columns = gridValues.userDefined.map((line) => { return line.length }).sort((a, b) => { return b - a })[0]
            const template =  {
                rows: [...rowHeights, ...Array(rows).fill(rowHeight)].slice(0, rows).join(' '),
                cols: [...columnWidths, ...Array(columns).fill(columnWidth)].slice(0, columns).join(' ')
            }

            function row(pos, val, tag) {
                page.style(tag, `grid-row-${pos}`, val)
            }

            function col(pos, val, tag) {
                page.style(tag, `grid-column-${pos}`, val)
            }

            page.style(element.selector.id(), 'display', 'grid', 'grid-template-rows', template.rows, 'grid-template-columns', template.cols)

            const space = 0

            gridValues.userDefined[0].forEach((current, i, array) => { //console.log('Grid setting col for first line.')
                if (current == space) {
                    if (i > 0 && array[i - 1] != space) {
                        const previous = array[i - 1]
                        col(end, i + 1, content[previous - 1].selector.id())
                    }
                } else {
                    row(start, 1, content[current - 1].selector.id())
                    if (i > 0) {
                        const previous = array[i - 1]
                        if (previous == space || current != previous) {
                            col(start, i + 1, content[current - 1].selector.id())
                            if (previous != space) {
                                col(end, i + 1, content[previous - 1].selector.id())
                            }
                        }
                    } else {
                        col(start, i + 1, content[current - 1].selector.id())
                    }
                    if ((i + 1) == columns && current == array[i - 1]) {
                        const previous = array[i - 1]
                        col(end, i + 2, content[previous - 1].selector.id())
                    }
                }
            })

            for (var i = 1; i < gridValues.userDefined.length; i++) {
                const line = gridValues.userDefined[i]
                for (var j = 0; j < line.length; j++) { //console.log('Grid setting row and col for lines.')
                    var previous = gridValues.userDefined[i - 1][j]
                    const current  = line[j]
                    if (previous != space && previous != current) {
                        row(end, i + 1, content[previous - 1].selector.id())
                    }
                    if ((i + 1) == rows && previous == current && current != space) { 
                        row(end, i + 2, content[current - 1].selector.id())
                    }
                    if (current == space) {
                        if (j > 0 && line[j - 1] != space) {
                            previous = line[j - 1]
                            col(end, j + 1, content[previous - 1].selector.id())
                        }
                    } else {
                        if (previous != current) {
                            row(start, i + 1, content[current - 1].selector.id())
                        }
                        if (j > 0) {
                            previous = line[j - 1]
                            if (previous == space || current != previous) {
                                col(start, j + 1, content[current - 1].selector.id())
                                if (previous != space) {
                                    col(end, j + 1, content[previous - 1].selector.id())
                                }
                            }
                        } else {
                            col(start, j + 1, content[current - 1].selector.id())
                        }
                        if ((j + 1) == columns && current == previous) {
                            col(end, j + 2, content[current - 1].selector.id())
                        }
                    }
                }
            }
        }

        if (!isPossibleToSetGrid()) {
            return
        }

        if (!validateContent()) {
            return
        }

        content = content.filter((c) => { return c.visible })

        if (!validateGridValues()) {
            return
        }

        adjustGridValues()

        if (!validateGridValuesA11y()) {
            return
        }

        setMissingTagIds()
        setGridCSS()
    }

}

Grid.lastTagId = 0

Grid.stringToDimension = (str) => {
    if (acceasy.type.isString(str)) {
        const parts = str.toLowerCase().split('x')
        if (parts.length == 2 && acceasy.type.isNumber(Number(parts[0])) && acceasy.type.isNumber(Number(parts[1]))) {
            return { rows: Math.floor(Number(parts[0])), cols: Math.floor(Number(parts[1])) }
        }
    }
    return { rows: null, cols: null }
}

Grid.grid = (rows, cols) => {
    var grid = []
    var col = 0
    for (var i = 0; i < rows; i++) {
        grid.push([])
        for (var j = 0; j < cols; j++) {
            grid[i].push(++col)
        }
    }
    return grid
}

Grid.gridFromString = (str) => {
    const dimension = Grid.stringToDimension(str)
    if (dimension.rows && dimension.cols) {
        return Grid.grid(dimension.rows, dimension.cols)
    }
    return null
}

export default class Element extends Grid {

    constructor(tagName, content, allowArray = true, allowNull = true, allowElement = true, allowedTypes = ['string', 'number']) {
        super()

        this.tagName = tagName
        if (acceasy.type.isArray(content)) {
            this.content = acceasy.array.isSimple(content) ? content : acceasy.array.simplify(content)
        } else {
            this.content = content
        }
        this.allowArray = allowArray
        this.allowNull = allowNull
        this.allowElement = allowElement
        this.allowedTypes = allowedTypes

        this.isElement = true
        this.visible = true
        this.successBuild = false
        this.tag = null
        this.props = { }

        this.selector = {
            tag: () => {
                return this.tagName
            },
            id: () => {
                return `#${this.getId()}`
            },
            class: (index = null) => {
                const classes = this.getClasses()
                if (acceasy.array.isEmpty(classes)) {
                    return ''
                }
                if (!acceasy.type.isNumber(index) || index < 0 || index >= classes.length) {
                    return classes.map((cls) => { return `.${cls}` }).join(', ')
                }
                return `.${classes[index]}`
            }
        }
    }

    // Element functions
    validateContent() {
        if (this.content == null) {
            return this.allowNull
        }
        if (this.content.isElement) {
            return this.allowElement
        }
        if (acceasy.type.isArray(this.content)) {
            return this.allowArray
        }
        return acceasy.array.contains(this.allowedTypes, (typeof this.content))
    }

    isValidContent(content) {
        if (content == null) {
            return this.allowNull
        }
        if (content.isElement) {
            return this.allowElement
        }
        return acceasy.array.contains(this.allowedTypes, (typeof content))
    }

    createTag() {
        if (this.tag == null) { 
            this.tag = document.createElement(this.tagName)
        }
    }

    invalidContentErrorMessageTag(content = this.content) {
        return window.acceasy.errorMessage(`Invalid content for <${this.tagName}> tag: ${content}.`).error.tag
    }

    build(stopIfError) {
        this.setGrid()
        this.createTag()
        this.setProps()

        if (!this.validateContent()) {
            this.tag.append(this.invalidContentErrorMessageTag())
        } else if (acceasy.type.isArray(this.content)) {
            for (var i in this.content) {
                const c = this.content[i]
                if (!this.isValidContent(c)) {
                    this.tag.append(this.invalidContentErrorMessageTag(c))
                    if (stopIfError) {
                        return
                    }
                    continue
                } 
                if (c == null) {
                    continue
                }
                if (c.isElement) {
                    c.build(stopIfError)
                    this.tag.append(c.tag)
                    if (!c.successBuild && stopIfError) {
                        return
                    }
                    continue
                }
                this.tag.append(c)
            }
            this.successBuild = true
        } else if (this.content == null) {
            this.successBuild = true
        } else if (this.content.isElement) {
            this.content.build(stopIfError)
            this.tag.append(this.content.tag)
            this.successBuild = this.content.successBuild
        } else {
            this.tag.append(this.content)
            this.successBuild = true
        }
    }

    setProps() {
        acceasy.dom.set(this.tag, this.props)
    }

    // Getters and Setters

    lang(value) {
        if (acceasy.type.isString(value)) {
            this.set('lang', value)
        }
        return this
    }

    get(prop) {
        return this.props[prop]
    }

    set(...props) {
        if (props.length >= 2) {
            for (var i = 0; i < props.length - 1; i += 2) {
                if (acceasy.type.isString(props[i])) {
                    this.props[props[i]] = props[i + 1]
                }
            }
        }
        return this
    }

    getId() {
        return this.get('id')
    }

    id(value) {
        this.set('id', value)
        return this
    }

    // selector.id() {
    //     return `#${this.getId()}`
    // }

    getClass() {
        return this.get('class')
    }

    getClasses() {
        const currentClass = this.get('class')
        return currentClass ? currentClass.split(' ') : []
    }

    cls(name, overwrite = false) {
        if (acceasy.type.isString(name)) {
            const currentClass = this.get('class')
            if (overwrite || currentClass == null) {
                this.set('class', name)
            } else {
                this.set('class', `${currentClass} ${name}`)
            }
        }
        return this
    }

    // style(prop, value) {
    //     if (acceasy.type.isString(prop) && (acceasy.type.isString(value) || acceasy.type.isNumber(value))) {
    //         const currentStyle = this.get('style') ?? ''
    //         this.set('style', `${currentStyle}${prop}: ${value}; `)
    //     }
    //     return this
    // }

    // styles(...props) {
    //     var i = 0
    //     while(i < props.length - 1) {
    //         this.style(props[i++], props[i++])
    //     }
    //     return this
    // }

    style(...props) {
        if (props.length >= 2) {
            for (var i = 0; i < props.length - 1; i += 2) {
                const prop = props[i]
                const value = props[i + 1]
                if (acceasy.type.isString(prop) && (acceasy.type.isString(value) || acceasy.type.isNumber(value))) {
                    const currentStyle = this.get('style') ?? ''
                    this.set('style', `${currentStyle}${prop}: ${value}; `)
                }
            }
        }
        return this
    }

}

