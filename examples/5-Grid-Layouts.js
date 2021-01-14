import page from '../acceasy-2/page.js'
import html from '../acceasy-2/html.js'

html.setUpBuidFunctionsGlobally()

page('en-us')
    .style('*', 'margin', 0, 'padding', 0)
    .style('body, main', 'width', '500px', 'height', '500px')
    .style('p', 'font-family', 'helvetica', 'font-weight', 'bold', 'text-align', 'center', 'line-height', '50px')
    .body(
        title('Grid'),
        subTitle('Uncomment the different grid values to see the different layouts.'),
        main(Array(9).fill((i)=>{ return p(i) }).map((f, i) => { return f(i + 1).style('background', ['lightblue', 'lightgreen', 'yellow', 'red', 'orange', 'purple', 'brown', 'cyan', 'gray'][i%9]) }))
        // .grid(
        //     [1,2,3,4],
        //     [1,5,6,4],
        //     [1,7,8,4],
        //     [1,7,8,4],
        //     [1,9]
        // )
        // .grid(
        //     [1,0,2],
        //     [1,3,2],
        //     [4,3,5],
        //     [4,6,5],
        //     [7,6,8],
        //     [7,9,8]
        // )
        .grid(
            [1,1,1,1,1,2],
            [3,3,3,3,3,2],
            [4,5,5,5,5,2],
            [4,6,7,7,7,2],
            [4,6,8,9,9,2],
            [4,6,8,0,0,2],
            [4,6,8,0,0,2],
        )
        // .grid(
        //     [1,1,1,1,2],
        //     [3,3,3,4,2],
        //     [5,5,6,4,2],
        //     [7,0,6,4,2],
        //     [7,8,8,4,2],
        //     [7,9,9,9,9],
        // )
        // .grid(
        //     [0,1,0],
        //     [0,0,2,2,0],
        //     [0,0,0,3,3,3,0],
        //     [0,0,0,0,4,4,4,4,0],
        //     [0,0,0,0,0,5,5,5,5,5,0],
        //     [0,0,0,0,0,0,6,6,6,6,6,6,0],
        //     [0,0,0,0,0,0,0,7,7,7,7,7,7,7,0],
        //     [0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,0],
        //     [0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,0]
        // )
        // .grid(
        //     [1,0],
        //     [1,2,0],
        //     [1,2,3,0],
        //     [1,2,3,4,0],
        //     [1,2,3,4,5,0],
        //     [1,2,3,4,5,6,0],
        //     [1,2,3,4,5,6,7,0],
        //     [1,2,3,4,5,6,7,8,0],
        //     [1,2,3,4,5,6,7,8,9,0],
        //     [1,2,3,4,5,6,7,8,0],
        //     [1,2,3,4,5,6,7,0],
        //     [1,2,3,4,5,6,0],
        //     [1,2,3,4,5,0],
        //     [1,2,3,4,0],
        //     [1,2,3,0],
        //     [1,2,0],
        //     [1,0,]
        // )
        // .grid(
        //     [1,2,3,4,5,6,7,8,9]
        // )
        // .grid(
        //     1,2,3,4,5,6,7,8,9
        // )
        // .grid(
        //     [0,1],
        //     [0,2],
        //     [0,3],
        //     [0,4],
        //     [0,5],
        //     [0,6],
        //     [0,7],
        //     [0,8],
        //     [0,9],
        // )
        // .grid(
        //     [1,0],
        //     [2,0],
        //     [3,0],
        //     [4,0],
        //     [5,0],
        //     [6,0],
        //     [7,0],
        //     [8,0],
        //     [9,0],
        // )
        // .grid(
        //     [1,0,2,0,3,0],
        //     [0,4,0,5,0,6],
        //     [7,0,8,0,9,0]
        // )
        // .grid(
        //     [0,1,0,2,0,3],
        //     [4,0,5,0,6,0],
        //     [0,7,0,8,0,9]
        // )
    )
    .build()