import page from '../acceasy-2/page.js'

page.newUsingLanguage('en-US')
    .head(
        title('Site Example'),
        meta().set('charset', 'utf-8')
    )
    .style('h2, h3, h4, h5, h6', 'font-weight', 'normal')
    .style('nav', 'width', '100%', 'height', '50px')
    .style('nav ul', 'margin', 0, 'padding', 0, 'width', '100%', 'height', '100%', 'list-style', 'none', 'display', 'flex', 'flex-direction', 'row', 'align-items', 'center')
    .style('nav ul li', 'width', '25%', 'height', '100%')
    .style('nav ul li a', 'width', '100%', 'height', '100%', 'text-align', 'center', 'display', 'flex', 'justify-content', 'center', 'align-items', 'center', 'text-decoration', 'none', 'font-weight', 'bold', 'color', 'white', 'background', 'pink')
    .style('nav ul li a:hover', 'color', 'pink', 'background', 'white')
    .style('main section article h2', 'border-bottom', 'solid black 1px')
    .style('footer', 'display', 'flex', 'flex-direction', 'row', 'justify-content', 'space-around', 'align-items', 'center', 'background', 'rgb(240, 240, 240)')
    .style('footer a', 'font-weight', 'bold', 'color', 'gray')
    .style('#portfolio', 'display', 'flex', 'flex-direction', 'column', 'justify-content', 'space-between')
    .style('#portfolio ul', 'height', '50%', 'list-style', 'none')
    .style('#portfolio ul li', 'border', 'solid black 1px', 'border-radius', '10px', 'display', 'flex', 'align-items', 'center', 'justify-content', 'center')
    .body(
        nav(
            ul(
                li(a('#about', 'About').id('about-link')),
                li(a('#portfolio', 'Portfolio').id('portfolio-link')),
                li(a('#clients', 'Clients').id('clients-link')),
                li(a('#contactme', 'Contact me').id('contactme-link'))
            )
        ),

        header(
            h1('My site!'),
            p('This is my site and I created it to explore the ', a('#', 'Acceasy'), ' framework.')
        ).grid([0,1,0],[0,2,0]).gridColumnWidths('10%', '80%', '10%'),

        main(
            section(

                article(
                    h2('About'),
                    p('Something about me...')
                ).id('about'),

                article(
                    h2('Portfolio'),
                    p('Something about my portfolio...'),
                    ul(
                        li('Job 1'),
                        li('Job 2'),
                        li('Job 3'),
                        li('Job 4'),
                    ).id('jobs')
                    .grid([1,0,2,0,3,0,4])
                ).id('portfolio'),

                article(
                    h2('Clients'),
                    p('Something about my clients...'),
                    img('a', 'test')
                ).id('clients'),

                article(
                    h2('Contact me'),
                    p('A form to contact me...'),
                    form('#', 'POST', 
                        label('Name: ', input('text', 'name', true, 'enter your name').id('name')).forId('name').style('display', 'flex', 'flex-direction', 'row', 'justify-content', 'space-between'),
                        label('Subject: ', input('text', 'subject', true, 'enter a subject').id('subject')).forId('subject').style('display', 'flex', 'flex-direction', 'row', 'justify-content', 'space-between'),
                        label('Message: ', input('text', 'message', true, 'enter your message').id('message')).forId('message').style('display', 'flex', 'flex-direction', 'row', 'justify-content', 'space-between'),
                        input('submit', null, false, null).set('value', 'Send'),
                        input('reset', null, false, null).set('value', 'Clear')
                    )
                    .style('height', '50%')
                    .grid(
                        [0,1,1,1,0],
                        [0,2,2,2,0],
                        [0,3,3,3,0],
                        [0,4,0,5,0]
                    ).gridColumnWidths('10px', '1fr', '1fr', '1fr', '10px').gridRowHeight('25%').style('align-items', 'center')
                ).id('contactme')
                .style('display', 'flex', 'flex-direction', 'column', 'justify-content', 'space-between')

            )
            .grid(
                [1,0,2],
                [3,0,4]
            )
            .gridRowHeight('50%')
            .gridColumnWidths('calc(50% - 25px)', '50px', 'calc(50% - 25px)')
        )
        .grid([0,1,0]).gridRowHeights('100%').gridColumnWidths('10%', '80%', '10%'),

        footer(
            a('#', 'LinkedIn'),
            a('#', 'Github'),
            a('#', 'Medium')
        )
    )
    .grid(1,2,3,4)
    .gridRowHeights('50px', '100px', 'calc(100% - 200px)', '50px')
    .onload = () => {
        const colors = ['lightgreen', 'orange', 'lightblue', 'violet'];
        const ids = ['about', 'portfolio', 'clients', 'contactme'];
        ids.forEach((str, i) => { 
            const link = document.getElementById(`${str}-link`)
            const section = document.getElementById(`${str}`)
            link.addEventListener('mouseover', () => { section.style.background = colors[i % colors.length] })
            link.addEventListener('mouseout', () => { section.style.background = 'white' })
            section.addEventListener('mouseover', () => { link.style['border-bottom'] = `solid 5px ${colors[i % colors.length]}` })
            section.addEventListener('mouseout', () => { link.style['border-bottom'] = 'none' })
        });

        document.getElementById('jobs').childNodes.forEach((child, i) => { child.style.background = ['red', 'green', 'blue', 'brown'][i % 4] })
    }