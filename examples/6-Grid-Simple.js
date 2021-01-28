import page from '../acceasy-2/page.js'
import html from '../acceasy-2/html.js'

html.setElementsGlobally()

page('en-us')
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
    .build()