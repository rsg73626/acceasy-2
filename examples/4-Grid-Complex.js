import page from '../acceasy-2/page.js'
import html from '../acceasy-2/html.js'

html.setElementsGlobally()

page('en-us')
    .style('p', 'background-color', 'lightblue', 'width', '100%', 'height', '100%')
    .style('p', 'display', 'flex', 'justify-content', 'center', 'align-items', 'center')
    .style('p', 'margin', 0)
    .body(
        Array(10).fill((v) => { return p(v) }).map((f, i) => { return f(`Content ${ i + 1 }`).style('background-color', ['pink', 'yellow', 'lightgreen', 'orange', 'lightblue'][i%5]) }),
        p('abc').style('background-color', 'red')
    )
    .grid(
        [1, 1, 2, 3, 4, 4],
        0,
        [1, 1, 5, 6, 4, 4],
        0,
        [1, 1, 7, 8, 4, 4],
        [1, 1, 9, 8, 4, 4],
        [0, 0, 10, 10, 0, 0],
        11
    )
    .build()