import page from '../acceasy-2/page.js'

page.newUsingLanguage('en-US')
    .style('p', 'font-family', 'Helvetica', 'font-size', '24px', 'font-weight', 'bold', 'color', 'white')
    .body(
        p('A').style('background', 'red'), 
        p('B').style('background', 'green'),
        p('C').style('background', 'orange'),
        p('D').style('background', 'purple')
    )
    .grid(
        1,
        1,
        1,
        [2,3, 4]
    ) 