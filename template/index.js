// IMPORTING ACCEASY
import page from '../acceasy-2/page.js'

// CREATING NEW PAGE
page.newUsingLanguage('en-US')
    // SETTING HEAD
    .head(
        title('Template'),
        meta().set('charset', 'utf-8')
    )
    // CREATING CSS VARIABLES AND GLOBAL STYLES
    .cssVar('--font', 'Arial','--title-color', 'white', '--title-background', 'red', '--body-color', 'black', '--body-background', 'lightgray')
    .style('html, body', 'width', '100%', 'height', '100%')
    .style('body', 'font-family', 'var(--font)')
    // SETTING BODY
    .body(
        main(
            h1('Template').style('color', 'var(--title-color)', 'background', 'var(--title-background)', 'margin', '0px', 'padding', '20px'), // USING CSS IN LINE
            p('This is a template. Please, check the following files to get started.').style('padding', '10px'), // USING CSS IN LINE
            ul(
                li('template/index.html'),
                li('template/index.js')
            )
        ).style('color', 'var(--body-color)', 'background', 'var(--body-background)') // USING CSS IN LINE
    )
    .grid([0,1,0]) // USING GRID TO CENTRALIZE THE PAGE
    .onload = () => alert('Document did load.') // SETTING ONLOAD BLOCK

// YOU WON'T HAVE ACCESS TO YOUR PAGE HERE, UNLESS TO STORE IT IN A VARIABLE AND USE IT HERE