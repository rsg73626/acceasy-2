import page from '../acceasy-2/page.js'
import html from '../acceasy-2/html.js'

html.setUpBuidFunctionsGlobally()
const myPage = page('en-us')

myPage
    .cssVar('--font', '"Arial"')
    .cssVar('--h-back-color', 'red', '--m-back-color', 'green', '--f-back-color', 'blue')
    .style('html', 'width', '50%', 'height', '50%', 'font-family', 'var(--font)')
    .style('body', 'width', 'calc(100% - 10px)', 'height', 'calc(100% - 10px)', 'border', 'black solid 5px')
    .style('#header', 'background-color', 'var(--h-back-color)')
    .style('#main', 'background-color', 'var(--m-back-color)')
    .style('#footer', 'background-color', 'var(--f-back-color)')
    .body(
        style('html { color: lightgray; }', 'header { color: red; border: solid red 3px; border-radius: 10px;}'),
        header(p('Different manners to set styles.'))
            .id('header')
            .cls('header')
            .style('font-weight', 'bold', 'font-size', '35px')
            .style('background-color', 'pink')
            .style('padding', '15px'),
        main('<main>')
            .id('main')
            .cls('main'),
        footer('<footer>')
            .id('footer')
            .cls('footer')
    )
    .build()
