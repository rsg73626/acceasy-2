import page from '../acceasy-2/page.js'

page.newUsingLanguage('en-US')
    .style('html, body', 'width', '100%')
    .style('section', 'width', '80%', 'margin', 'auto')
    .style('section article', 'width', '100%', 'height', '350px', 'margin-top', '20px', 'padding', '10px', 'border-radius', '10px', 'border', 'black 2px solid', 'background', 'lightblue')
    .style('section article h1', 'margin', '-10px -10px 10px -10px', 'padding', '0px', 'padding', '10px 0px', 'background', 'lightpink', 'border-radius', '9px 9px 0px 0px', 'text-align', 'center', 'color', 'white')
    .body(
        section(
            article(
                h1('<q>'),
                p('The man said ', q('Things that are impossible just take longer'), '. I disagreed with him.')
            ),
            article(
                h1('<cite>'),
                p('In the words of ', cite('Charles Bukowski'), ' - ', q('An intellectual says a simple thing in a hard way. An artist says a hard thing in a simple way.'))
            ),
            article(
                h1('<em>'),
                p('These examples show how changing the stress emphasis changes the meaning. First, a general statement of fact, with no stress:'),
                p('Cats are cute animals.'),

                p('By emphasizing the first word, the statement implies that the kind of animal under discussion is in question (maybe someone is asserting that dogs are cute):'),
                p(em('Cats'), ' are cute animals.'),

                p('Moving the stress to the verb, one highlights that the truth of the entire sentence is in question (maybe someone is saying cats are not cute):'),
                p('Cats ', em('are'), ' cute animals.'),

                p('By moving it to the adjective, the exact nature of the cats is reasserted (maybe someone suggested cats were mean animals):'),
                p('Cats are ', em('cute'), ' animals.'),

                p('Similarly, if someone asserted that cats were vegetables, someone correcting this might emphasize the last word:'),
                p('Cats are cute ', em('animals'), '.'),

                p('By emphasizing the entire sentence, it becomes clear that the speaker is fighting hard to get the point across. This kind of stress emphasis also typically affects the punctuation, hence the exclamation mark here.'),
                p(em('Cats are cute animals!')),

                p('Anger mixed with emphasizing the cuteness could lead to markup such as:'),
                p(em('Cats are ', em('cute'), ' animals!')),
            ).style('height', '600px'),
            article(
                h1('<strong>'),
                p('Chapter 1: ', strong('The Praxis')),

                figcaption('Figure 1. ', strong('Ant colony dynamics'), '. The ants in this colony are affected by the heat source (upper left) and the food source (lower right).'),

                p(strong('Flowers, Bees, and Honey'), ' and other things I don\'t understand'),

                p(
                    strong('Warning.'), ' This dungeon is dangerous. ',
                    strong('Avoid the ducks.'), ' Take any gold you find. ',
                    strong(strong('Do not take any of the diamonds'), ', they are explosive and ', strong('will destroy anything within ten meters.')), ' You have benn warned.'
                ),

                p('Welcome to Remy, the reminder system.'),
                p('Your tasks for doay:'),
                ul(
                    li(strong('Turn off the oven.')),
                    li('Put out the trash.'),
                    li('Do the laundy.')
                )
            ),
            article(
                h1('<small>'),
                dl(
                    dt('Single room'),
                    dd('199 € ', small('breakfast included, VAT not included')),
                    dt('Double room'),
                    dd('239 € ', small('breakfast included, VAT not included'))
                ),
                
                p('In this second example, the small element is used for a side comment in an article.'),

                p('Example Corp today announced record profits for the second quarter ', small('(Full Disclosure: Foo News is a subsidiary of Example Corp)'), ', leading to speculation about a third quarter merger with Demo Group.'),

                p('This is distinct from a sidebar, which might be multiple paragraphs long and is removed from the main flow of text. In the following example, we see a sidebar from the same article. This sidebar also has small print, indicating the source of the information in the sidebar.'),

                aside(
                    h2('Example Corp'),
                    p('This company mostly creates small software and Web sites.'),
                    p('The Example Corp company mission is "To provide entertainment and news on a sample basis".'),
                    p(small('Information obtained from ', a('example.com', 'https://example.com/about.html'),' home page.'))
                ),

                p('In this last example, the small element is marked as being important small print.'),

                p(strong(small('Continued use of this service will result in a kiss.')))
            ).style('height', '600px'),
            article(
                h1('<s>'),
                p('Buy our Iced Tea and Lemonade!'),
                p(s('Recommended retail price: $3.99 per bottle')),
                p(strong('Now selling for just $2.99 a bottle!'))
            ),
            article(
                h1('<dfn>'),

                p('In the following fragment, the term "Garage Door Opener" is first defined in the first paragraph, then used in the second. In both cases, its abbreviation is what is actually displayed.'),
                p('The ', dfn(abbreviation('Garage Door Opener', 'GDO')), ' is a device that allows off-world teams to open the iris.'),
                p('...'),
                p('Teal’c activated his ', abbreviation('Garage Door Opener', 'GDO'), ' and so Hammond ordered the iris to be opened.'),

                p('With the addition of an a element, the reference can be made explicit:'),
                p('The ', dfn(abbreviation('Garage Door Opener', 'GDO')).id('gdo'), ' is a device that allows off-world teams to open the iris.'),
                p('...'),
                p('Teal’c activated his ', a('#gdo', abbreviation('Garage Door Opener', 'GDO')), ' and so Hammond ordered the iris to be opened.')
            ),
            article(
                h1('<data>'),
                subTitle(data('9678AOU879', 'The Instigator 2000').set('itemprop', 'product-id')).set('itemscope', '')
            ),
            article(
                h1('<var>'),
                p('If there are ', variable('n'), ' pipes leading to the ice cream factory then I expect at ', em('least'), ' ', variable('n'), ' flavors of ice cream to be available for purchase!'),

                p('Then he turned to the blackboard and picked up the chalk. After a few moment’s thought, he wrote ', variable('E'), ' = ', variable('m'), ' ', variable('c'), 'ˆ2. The teached looker pleased.')
            ),
            article(
                h1('<samp>'),
                p('The computer said ', samp('Too much cheese in tray two'), ' but I didn’t know what that meant'),

                pre(
                    samp(
                        span('jdoe@mowmow:~$').cls('prompt'), 
                        kbd('ssh demo.example.com'), 
                        p('Last login: Tue Apr 12 09:10:17 2005 from mowmow.example.com on pts/1'),
                        p('Linux demo 2.6.10-grsec+gg3+e+fhs6b+nfs+gr0501+++p3+c4a+gr2b-reslog-v6.189 #1 SMP Tue Feb 1 11:22:36 PST 2005 i686 unknown'),
                        span('jdoe@demo:~$ ').cls('prompt'), span('_').cls('cursor')
                    )
                )
            ),
            article(
                h1('<kdb>'),
                p('To make George eat an apple, press ', kbd(kbd('Shift'), '+', kbd('F3'))),

                p('To make George eat an apple, select ', kbd(kbd(samp('File')), '|', kbd(samp('Eat Apple...')))),

                p('To make George eat an apple, select ', kbd('File | Eat Apple...'))
            ),
            article(
                h1('<sub> and <sup>'),
                p(
                    'The most intelligent women are',
                    span(abbr('M', sup('lle')), ' de Beauvoir').lang('fr'), ' and ',
                    span(abbr('M', sup('me')), ' Collette').lang('fr'), '.'
                ),
                p(
                    'The coordinate of the ', variable('i'), 'th point is (', variable('x', sub(variable('i'))), ', ', variable('y', sub(variable('i'))), ').',
                    'For example, the 10th point has coordinate (', variable('x', sub(10)), ', ', variable('y', sub(10)), ').'
                )
            ),
            article(
                h1('<b>'),
                p('The ', b('frobonitor'), ' and ', b('barbinator'), ' components are fried.'),
                p('You enter a small room. Your ', b('sword'), ' glows brighter. A ', b('rat'), ' scurries past the corner wall.')
            ),
            article(
                h1('<u>'),
                p('Among others, Japanese, Hungarian and Chinese names are generally written with the family name first: ', u('Wu'), ' Xiaoqian.'),
                p('[...] and when the sun rises over the trees of fire, there are no other ', u('incediaris').cls('spelling'), ' as powerful in this collection of dwelling [...]'),
                p('The ', u('see'), ' is full of fish')
            ),
            article(
                h1('<mark>'),
                p('Consider the following quote:').lang('en-US'),
                blockquote(
                    p('Look around and you will find, no-one’s really '), mark('colour'), ' blind.'
                ).lang('en-GB'),
                p('As we can tell from the ', em('spelling'), ' of the word, the person writing this quote is clearly not American.').lang('en-US')
            ),
            article(
                h1('<bdi> and <bdo>'),
                ul(
                    li('User ', bdi('jcranmer'), ': 12 posts.'),
                    li('User ', bdi('hober'), ': 5 posts.'),
                    li('User ', bdi(bdo('إيان').set('dir', 'rtl')), ': 3 posts.')
                )
            ),
            article(
                h1('<wbr>'),
                p('So then he pointed at the tiger and screamed "there', wbr(), 'is', wbr(), 'no', wbr(), 'way', wbr(), 'you', wbr(), 'are', wbr(), 'ever', wbr(), 'going', wbr(), 'to', wbr(), 'catch', wbr(), 'me"!')
            )
        )
    )