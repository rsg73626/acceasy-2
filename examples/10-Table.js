import page from '../acceasy-2/page.js'

page.newUsingLanguage('en-US')
    .body(
        table(
            caption('Simple Table Example'),
            thead(
                tr(
                    th('First head'),
                    th('Second head'),
                    th('Third head'),
                ),
            ),
            tbody(
                tr(
                    td('Line 1, Col 1'),
                    td('Line 1, Col 2'),
                    td('Line 1, Col 3'),
                ),
                tr(
                    td('Line 2, Col 1'),
                    td('Line 2, Col 2'),
                    td('Line 2, Col 3'),
                ),
                tr(
                    td('Line 3, Col 1'),
                    td('Line 3, Col 2'),
                    td('Line 3, Col 3'),
                ),
            ),
            tfoot(
                tr(
                    td('Foot 1'),
                    td('Foot 2'),
                    td('Foot 3')
                )
            )
        ).set('border', 1),
        table(
            caption('Table using <colgroup> to stylize.'),
            colgroup(
                col().set('span', 2).style('background', 'red'),
                col().style('background', 'yellow'),
            ),
            tr(
                td('ISBN'),
                td('Title'),
                td('Price'),
            ),
            tr(
                td(3476896),
                td('My first HTML'),
                td('$53'),
            ),
            tr(
                td(5869207),
                td('My first CSS'),
                td('$49')
            )
        ).set('border', 1),
    )