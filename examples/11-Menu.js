import page from '../acceasy-2/page.js'

const defaultMenu = () => mn(mi('Item 1', '#'), mi('Item 2', '#'), mi('Item 3', '#'))

page.newUsingLanguage('en-US')
    .head(
        title('Menu'),
        meta().set('charset', 'utf-8')
    )
    .style('.acceasy-menu', 'margin-top', '10px', 'margin-bottom', '10px')
    .style('body', 'width', '100%', 'height', '2500px')
    .body(
        h1('Menu small'),
        defaultMenu().size(MenuSize.small),

        h1('Menu medium'),
        defaultMenu().size(MenuSize.medium),

        h1('Menu large'),
        defaultMenu().size(MenuSize.large),

        h1('Menu extra large'),
        defaultMenu().size(MenuSize.extraLarge),

        h1('Menu extra extra large'),
        defaultMenu().size(MenuSize.extraExtraLarge),

        h1('Menu with icon'),

        subTitle('Icons at left'),
        mn(
            mi('Item 1', '#').icon('fa fa-home fa-lg'),
            mi('Item 2', '#').icon('fa fa-handshake-o fa-lg'),
            mi('Item 3', '#').icon('fa fa-smile-o')
        ),

        subTitle('Icons at right'),
        mn(
            mi('Item 1', '#').icon('fa fa-home fa-lg').iconPosition(MenuIconPosition.right),
            mi('Item 2', '#').icon('fa fa-handshake-o fa-lg').iconPosition(MenuIconPosition.right),
            mi('Item 3', '#').icon('fa fa-smile-o').iconPosition(MenuIconPosition.right)
        ),

        h1('Menu with suboptions'),

        subTitle('Simple'),
        mn(
            mi('Item 1', '#', mi('Item 1.1', '#'), mi('Item 1.2', '#'), mi('Item 1.3', '#')).removeSuboptionsIcon(),
            mi('Item 2', '#', mi('Item 2.1', '#'), mi('Item 2.2', '#'), mi('Item 2.3', '#')).removeSuboptionsIcon(),
            mi('Item 2', '#', mi('Item 3.1', '#'), mi('Item 3.2', '#'), mi('Item 3.3', '#')).removeSuboptionsIcon()
        ),

        subTitle('Suboptions icon at left'),
        mn(
            mi('Item 1', '#', mi('Item 1.1', '#'), mi('Item 1.2', '#'), mi('Item 1.3', '#')).suboptionsIconPosition(MenuIconPosition.left),
            mi('Item 2', '#', mi('Item 2.1', '#'), mi('Item 2.2', '#'), mi('Item 2.3', '#')).suboptionsIconPosition(MenuIconPosition.left),
            mi('Item 2', '#', mi('Item 3.1', '#'), mi('Item 3.2', '#'), mi('Item 3.3', '#')).suboptionsIconPosition(MenuIconPosition.left)
        ),

        subTitle('Suboptions icon at left'),
        mn(
            mi('Item 1', '#', mi('Item 1.1', '#'), mi('Item 1.2', '#'), mi('Item 1.3', '#')),
            mi('Item 2', '#', mi('Item 2.1', '#'), mi('Item 2.2', '#'), mi('Item 2.3', '#')),
            mi('Item 2', '#', mi('Item 3.1', '#'), mi('Item 3.2', '#'), mi('Item 3.3', '#'))
        ),

        subTitle('Complete (icons at left and submenu options icon)'),
        mn(
            mi('Item 1', '#', mi('Item 1.1', '#'), mi('Item 1.2', '#'), mi('Item 1.3', '#')).icon('fa fa-home fa-lg'),
            mi('Item 2', '#', mi('Item 2.1', '#'), mi('Item 2.2', '#'), mi('Item 2.3', '#')).icon('fa fa-handshake-o fa-lg'),
            mi('Item 2', '#', mi('Item 3.1', '#'), mi('Item 3.2', '#'), mi('Item 3.3', '#')).icon('fa fa-smile-o')
        ),

        subTitle('Complete II (icons at right and submenu options icon)'),
        mn(
            mi('Item 1', '#', mi('Item 1.1', '#'), mi('Item 1.2', '#'), mi('Item 1.3', '#')).icon('fa fa-home fa-lg').iconPosition(MenuIconPosition.right),
            mi('Item 2', '#', mi('Item 2.1', '#'), mi('Item 2.2', '#'), mi('Item 2.3', '#')).icon('fa fa-handshake-o fa-lg').iconPosition(MenuIconPosition.right),
            mi('Item 2', '#', mi('Item 3.1', '#'), mi('Item 3.2', '#'), mi('Item 3.3', '#')).icon('fa fa-smile-o').iconPosition(MenuIconPosition.right)
        ),

        h1('Personalized colors'),
        mn(
            mi('Item 1', '#', mi('Item 1.1', '#'), mi('Item 1.2', '#'), mi('Item 1.3', '#')).icon('fa fa-home fa-lg'),
            mi('Item 2', '#', mi('Item 2.1', '#'), mi('Item 2.2', '#'), mi('Item 2.3', '#')).icon('fa fa-handshake-o fa-lg'),
            mi('Item 2', '#', mi('Item 3.1', '#'), mi('Item 3.2', '#'), mi('Item 3.3', '#')).icon('fa fa-smile-o')
        )
        .backgroundColor('pink')
        .backgroundColorHover('white')
        .textColor('white')
        .textColorHover('pink')
        .submenuBackgroundColor('lightblue')
        .submenuBackgroundColorHover('white')
        .submenuTextColor('white')
        .submenuTextColorHover('lightblue'),

        h1('Personalized colors II'),
        mn(
            mi('Item 1', '#', mi('Item 1.1', '#'),  mi('Item 1.2', '#'),  mi('Item 1.3', '#'))
            .icon('fa fa-home fa-lg')
            .backgroundColor('pink').backgroundColorHover('red')
            .textColor('red').textColorHover('pink')
            .submenuBackgroundColor('black').submenuBackgroundColorHover('white')
            .submenuTextColor('white').submenuTextColorHover('black'),

            mi('Item 2', '#', mi('Item 2.1', '#'), mi('Item 2.2', '#'), mi('Item 2.3', '#'))
            .icon('fa fa-handshake-o fa-lg')
            .backgroundColor('lightgreen').backgroundColorHover('darkgreen')
            .textColor('darkgreen').textColorHover('lightgreen')
            .submenuBackgroundColor('purple').submenuBackgroundColorHover('white')
            .submenuTextColor('white').submenuTextColorHover('purple'),

            mi('Item 3', '#', mi('Item 3.1', '#'),mi('Item 3.2', '#'), mi('Item 3.3', '#'))
            .icon('fa fa-smile-o')
            .backgroundColor('lightblue').backgroundColorHover('darkblue')
            .textColor('darkblue').textColorHover('lightblue')
            .submenuBackgroundColor('yellow').submenuBackgroundColorHover('black')
            .submenuTextColor('black').submenuTextColorHover('yellow'),
        ),

        h1('Personalized colors III'),
        mn(
            mi('Item 1', '#', mi('Item 1.1', '#'),  mi('Item 1.2', '#'),  mi('Item 1.3', '#'))
            .icon('fa fa-home fa-lg')
            .backgroundColor('pink').backgroundColorHover('red')
            .textColor('red').textColorHover('pink')
            .submenuBackgroundColor('red').submenuBackgroundColorHover('pink')
            .submenuTextColor('pink').submenuTextColorHover('red'),

            mi('Item 2', '#', mi('Item 2.1', '#'), mi('Item 2.2', '#'), mi('Item 2.3', '#'))
            .icon('fa fa-handshake-o fa-lg')
            .backgroundColor('lightgreen').backgroundColorHover('darkgreen')
            .textColor('darkgreen').textColorHover('lightgreen')
            .submenuBackgroundColor('darkgreen').submenuBackgroundColorHover('lightgreen')
            .submenuTextColor('lightgreen').submenuTextColorHover('darkgreen'),

            mi('Item 3', '#', mi('Item 3.1', '#'),mi('Item 3.2', '#'), mi('Item 3.3', '#'))
            .icon('fa fa-smile-o')
            .backgroundColor('lightblue').backgroundColorHover('darkblue')
            .textColor('darkblue').textColorHover('lightblue')
            .submenuBackgroundColor('darkblue').submenuBackgroundColorHover('lightblue')
            .submenuTextColor('lightblue').submenuTextColorHover('darkblue'),
        ),

        h1('Personalized colors IV'),
        mn(
            mi('Item 1', '#', mi('Item 1.1', '#'),  mi('Item 1.2', '#'),  mi('Item 1.3', '#'))
            .icon('fa fa-home fa-lg')
            .backgroundColor('red').backgroundColorHover('pink')
            .textColor('pink').textColorHover('red')
            .submenuBackgroundColor('pink').submenuBackgroundColorHover('red')
            .submenuTextColor('red').submenuTextColorHover('pink'),

            mi('Item 2', '#', mi('Item 2.1', '#'), mi('Item 2.2', '#'), mi('Item 2.3', '#'))
            .icon('fa fa-handshake-o fa-lg')
            .backgroundColor('darkgreen').backgroundColorHover('lightgreen')
            .textColor('lightgreen').textColorHover('darkgreen')
            .submenuBackgroundColor('lightgreen').submenuBackgroundColorHover('darkgreen')
            .submenuTextColor('darkgreen').submenuTextColorHover('lightgreen'),

            mi('Item 3', '#', mi('Item 3.1', '#'),mi('Item 3.2', '#'), mi('Item 3.3', '#'))
            .icon('fa fa-smile-o')
            .backgroundColor('darkblue').backgroundColorHover('lightblue')
            .textColor('lightblue').textColorHover('darkblue')
            .submenuBackgroundColor('lightblue').submenuBackgroundColorHover('darkblue')
            .submenuTextColor('darkblue').submenuTextColorHover('lightblue'),
        ),

        h1('Personalized colors using shortcut'),
        mn(
            mi('Item 1', '#', mi('Item 1.1', '#'),  mi('Item 1.2', '#'),  mi('Item 1.3', '#'))
            .icon('fa fa-home fa-lg')
            .colors('red', 'pink', 'pink', 'red', 'pink', 'red', 'red', 'pink'),

            mi('Item 2', '#', mi('Item 2.1', '#'), mi('Item 2.2', '#'), mi('Item 2.3', '#'))
            .icon('fa fa-handshake-o fa-lg')
            .colors('darkgreen', 'lightgreen', 'lightgreen', 'darkgreen', 'lightgreen', 'darkgreen', 'darkgreen', 'lightgreen'),

            mi('Item 3', '#', mi('Item 3.1', '#'),mi('Item 3.2', '#'), mi('Item 3.3', '#'))
            .icon('fa fa-smile-o')
            .colors('darkblue', 'lightblue', 'lightblue', 'darkblue', 'lightblue', 'darkblue', 'darkblue', 'lightblue'),
        ),

        h1('Personalized colors using shortcut II'),
        mn(
            mi('Item 1', '#', mi('Item 1.1', '#'), mi('Item 1.2', '#'), mi('Item 1.3', '#')).icon('fa fa-home fa-lg'),
            mi('Item 2', '#', mi('Item 2.1', '#'), mi('Item 2.2', '#'), mi('Item 2.3', '#')).icon('fa fa-handshake-o fa-lg'),
            mi('Item 2', '#', mi('Item 3.1', '#'), mi('Item 3.2', '#'), mi('Item 3.3', '#')).icon('fa fa-smile-o')
        )
        .colors('pink', 'white', 'white', 'pink', 'lightblue', 'white', 'white', 'lightblue'),
        
    )