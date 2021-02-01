import page from '../acceasy-2/page.js'

page.newUsingLanguage('en-US')
    .head(
        title('Grouping Content'),
        meta().set('charset', 'utf-8')
    )
    .style('html, body', 'width', '100%')
    .style('section', 'width', '80%', 'margin', 'auto')
    .style('section article', 'width', '100%', 'height', '350px', 'margin-top', '20px', 'padding', '10px', 'border-radius', '10px', 'border', 'black 2px solid', 'background', 'lightblue')
    .style('section article h1', 'margin', '-10px -10px 10px -10px', 'padding', '0px', 'padding', '10px 0px', 'background', 'lightpink', 'border-radius', '9px 9px 0px 0px', 'text-align', 'center', 'color', 'white')
    .body(
        section(
            article(
                h1('<address>'),
                address(p('W3C ON Twitter:'), p(a('@w3c', 'https://twitter.com/w3c'))),
                address(
                    span('UNIVERSITY INTERSCHOLASTIC LEAGUE'), 
                    span('1701 Manor Road, Austin, TX 78722'), 
                    span('Tel: (512) 471-5883 | Fax: (512) 471-5908')
                ).style('display', 'flex', 'flex-direction', 'column')
            ),
            article(
                h1('<hr>'),
                hr()
            ),
            article(
                h1('<pre>'),
                p('This is the <code>Panel</code> constructor:'),
                pre(
                    code(
                        `function Panel(element, canClose, closeHandler) {
                            this.element = element;
                            this.canClose = canClose;
                            this.closeHandler = function () { if (closeHandler) closeHandler() };
                        }`
                    )
                )
            ),
            article(
                h1('<blockquote>'),
                blockquote('[Fred] then said he liked [...] fish.'),
                figure(
                    blockquote(
                        'That monster custom, who all sense doth eat Of habit’s devil, ',
                        abbreviation('et cetera', '&c.'),
                        '  not in Folio',
                        'What a falling off was there! From me, whose love was of that dignity That it went hand in hand even with the vow I made to her in marriage, and to decline Upon a wretch.',
                    ),
                    footer(
                        ' - ', cite('Shakespeare manual').cls('title'), ' by ', cite('Frederick Gard Fleay').cls('author'), ', p19 (in Google Books)'
                    )
                )
            ),
            article(
                h1('<dl>, <dt> and <dd>'),
                dl(
                    dt('Blanco tequila'),
                    dd('The purest form of the blue agave spirit...'),
                    dt('Reposado tequila'),
                    dd('Typically aged in wooden barrels for between two and eleven months...')
                ),
                p('Information about the rock band Queen:'),
                dl(
                    dt('Members'),
                    dd('Brian May'),
                    dd('Freddie Mercury'),
                    dd('John Deacon'),
                    dd('Roger Taylor'),
                    dt('Record labels'),
                    dd('EMI'),
                    dd('Parlophone'),
                    dd('Capitol'),
                    dd('Hollywood'),
                    dd('Island')
                )
            ).style('height', '400px'),
            article(
                h1('<div>'),
                subTitle('My use of language and my cats'),
                p('My cat’s behavior hasn’t changed much since her absence, except that she plays her new physique to the neighbors regularly, in an attempt to get pets.'),
                div(
                    p('My other cat, colored black and white, is a sweetie. He followed us to the pool today, walking down the pavement with us. Yesterday he apparently visited our neighbours. I wonder if he recognizes that their flat is a mirror image of ours.'),
                    p('Hm, I just noticed that in the last paragraph I used British English. But I’m supposed to write in American English. So I shouldn’t say "pavement" or "flat" or "color"...')
                ).lang('en-GB')
            ).lang('en-US')
        )
    )
    