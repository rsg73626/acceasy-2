import page from '../acceasy-2/page.js'

page.newUsingLanguage('en-US')
    .cssVar('--header-color', 'red', '--main-color', 'blue', '--aside-color', 'green', '--footer-color', 'purple')
    .style('*', 'margin', 0, 'padding', 0)
    .style('html', 'width', '100%', 'height', '200%', 'color', 'white', 'font-family', 'Helvetica', 'font-size', '14px')
    .style('body', 'width', '100%', 'height', '200%')
    .style('header', 'width', '100%', 'height', '25%')
    .style('main', 'width', '100%', 'height', '25%')
    .style('aside', 'width', '100%', 'height', '25%')
    .style('footer', 'width', '100%', 'height', '25%')
    .body(
        header(
            nav(
                ul(
                    li(a('#', 'Item 1')),
                    li(a('#', 'Item 2')),
                    li(a('#', 'Item 3'))
                )
            ).style('background-color', 'lightgray')
        ).style('background-color', 'var(--header-color)'),
        main(
            section(
                article(
                    h1('Article I'),
                    h2('The first article')
                ).id('article-1'),
                article(
                    title('Article II'),
                    subTitle('The second article')
                ).id('article-2')
            )
        ).style('background-color', 'var(--main-color)'),
        aside(
            ol(
                li(h(1, '<h1>')),
                li(h(2, '<h2>')),
                li(h(3, '<h3>')),
                li(h(4, '<h4>')),
                li(h(5, '<h5>')),
                li(h(6, '<h6>'))
            ),
            ol(
                li(h1('<h1>')),
                li(h2('<h2>')),
                li(h3('<h3>')),
                li(h4('<h4>')),
                li(h5('<h5>')),
                li(h6('<h6>'))
            ),
            ol(
                li(title('Title <h1>')),
                li(subTitle('Subtitle <h2>')),
                li(subSubTitle('Sub subtitle <h3>'))
            ),
            ol(
                li(h6('<6> to Title <h1>').title()),
                li(h6('<3> to Subitle <h2>').subTitle()),
                li(h6('<5> to Sub Subtitle <h1>').subSubTitle()),
            )
        ).style('background-color', 'var(--aside-color)', 'display', 'flex', 'flex-direction', 'row', 'justify-content', 'space-around', 'align-items', 'center'),
        footer(
            acronym('Hypertext Markup Language', 
                span('H').style('color', 'lightgreen'),
                span('T').style('color', 'lightblue'),
                span('M').style('color', 'pink'),
                span('L').style('color', 'yellow')
            ).lang('en').style('font-weight', 'bold', 'font-size', '35px'),
            br(),
            abbreviation('Autômato Celular', 'AC'), 
            br(),
            abbreviation('Accessibility', 'a', 11, 'y').lang('en')
        ).style('background-color', 'var(--footer-color)') 
    )
    