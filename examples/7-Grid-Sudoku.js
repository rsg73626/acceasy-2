import page from '../acceasy-2/page.js'
import html from '../acceasy-2/html.js'

html.setElementsGlobally()

const sudokuBlock = () => {
    return section(Array(9).fill((i) => { 
        return article(i)
    }).map((f, i) => { 
        return f(i + 1)
                    .style('text-align', 'center')
                    .style('line-height', '50px')
                    .style('border', 'solid black 1px')
    })).grid('3X3').gridSize('50px', '50px')
}

page.newUsingLanguage('en-us')
    .body(
        sudokuBlock(), sudokuBlock(), sudokuBlock(), 
        sudokuBlock(), sudokuBlock(), sudokuBlock(), 
        sudokuBlock(), sudokuBlock(), sudokuBlock()
    )
    .grid('3x3')
    .gridSize('150px', '150px')
    .build()