import page from '../acceasy-2/page.js'
import html from '../acceasy-2/html.js'

html.setUpBuidFunctionsGlobally()

page('en-us')
    .style('.acceasy-menu', 'margin-top', '10px')
    .body(
        menu(
            mi('Item 1', '#').icon('fa fa-smile-o', 'smile'),
            mi('Item 2', '#'),
            mi('Item 3', '#')
        ),

        menu(
            mi('Item 1', '#').icon('fa fa-smile-o', 'smile'),
            mi('Item 2', '#'),
            mi('Item 3', '#', mi('Item 3.1'))
        ),

        menu(
            mi('Item 1', '#', mi('Item 1.1'), mi('Item 1.2'), mi('Item 1.3')).icon('fa fa-smile-o', 'smile'),
            mi('Item 2', '#', mi('Item 2.1'), mi('Item 2.2'), mi('Item 2.3')).icon('fa fa-smile-o', 'smile'),
            mi('Item 3', '#', mi('Item 3.1'), mi('Item 3.2'), mi('Item 3.3')).icon('fa fa-smile-o', 'smile')
        )
    )
    .build();