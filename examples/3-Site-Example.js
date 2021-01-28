import page from '../acceasy-2/page.js'
import html from '../acceasy-2/html.js'

html.setElementsGlobally()

page.newUsingLanguage('en-us')
    .body(
        p('Content 1'),
        p('Content 2'),
        p('Content 3'),
        p('Content 4'),
        p('Content 5'),
        header(
            nav(
                ul(
                    li(a('#about', 'About us')),
                    li(a('#products', 'Products')),
                    li(a('contactus', 'Contact us'))
                ).grid([1, 2, 3])
            )
        ),
        main(
            section(
                article(
                    title('About us'), 
                    p('Find more about us and our history.')
                ).id('about'),
                article(
                    title('Products'), 
                    p('Find more about our products.'),
                    ol(
                        li(
                            figure(
                                img().alt('Product I').src('https://www.newneuromarketing.com/media/zoo/images/NNM-2015-019-Cost-consciousness-increase-product-sales-with-Price-Primacy_6a73d15598e2d828b0e141642ebb5de3.png'),
                                figcaption('This is the product I.')
                            )
                        ),
                        li(
                            figure(
                                img('https://cdn.iconscout.com/icon/free/png-256/product-135-781070.png', 'Product II'),
                                figcaption('This is the product II.')
                            )
                        ),
                        li(
                            figure(
                                img().alt('Product III').src('data:image/png;base64,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'),
                                figcaption('This is the product III.')
                            )
                        ),
                    ).grid([1, 2, 3])
                ).id('products'),
                article(
                    title('Contact us'),
                    p('Send us any question that you might have.')
                ).id('contactus'),
            ).grid(1,2,3)
        ),
        footer(
            a('#', 'LinkedIn'),
            a('#', 'Facebook'),
            a('#', 'Instagram')
        ).grid([1, 2, 3])
    )
    .grid([1, 2, 3, 4], 5, 6, 7, 8)
    .build()