import page from '../acceasy-2/page.js'
import html from '../acceasy-2/html.js'

html.setElementsGlobally()

page('en-us')
    .style('fieldset', 'display', 'flex', 'flex-direction', 'column', 'background', 'pink', 'border-color', 'black', 'border-radius', '10px', 'margin', '15px 0')
    .style('fieldset legend', 'font-weight', 'bold', 'color', 'white', 'background', 'black', 'font-size', '20px', 'padding', '5px', 'border-radius', '4px')
    .style('fieldset > *', 'margin', '5px 0')
    .style('input, select', 'height', '30px', 'border', 'none', 'padding-left', '5px', 'border-radius', '4px')
    .style('label', 'display', 'flex', 'align-items', 'center')
    .body(
        h1('Form'),
        form('#', 'GET',
            fieldset('Inputs', 
                input('text', 'input-text', true, 'input type text'),
                inputHidden('input-hidden', 'input-hidden-value'),
                inputText('input-text-by-shortcut', true, 'input type text by shortcut'),
                inputTel('input-tel', true, 'input type tel'),
                inputURL('input-url', true, 'input type url'),
                inputEmail('input-email', true, 'input type email'),
                inputPassword('input-password', true, 'input type password'),
                inputDate('input-date', true, 'input type date'),
                inputMonth('input-mont', true, 'input type month'),
                inputTime('input-time', true, 'input type time'),
                inputLocalDateTime('input-localdatetime', true, 'input type local-datetime'),
                inputNumber('input-number', true, 'input type number'),
                label('Input type range: ').forId('input-range'),
                inputRange('input-range', true, 'input type range').id('input-range'),
                label('Input type color: ').forId('input-color'),
                inputColor('input-color', true, 'input type color').id('input-color'),
                label(inputCheckbox('input-checkbox', true), 'input type checkbox'),
                label(inputCheckbox('input-checkbox-2', true), 'input type checkbox'),
                label(inputCheckbox('input-checkbox-3', false), 'input type checkbox'),
                label(inputRadio('input-radio', 'input-radio-1', true), 'input type radio'),
                label(inputRadio('input-radio', 'input-radio-2', false), 'input type radio'),
                label(inputRadio('input-radio', 'input-radio-3'), 'input type radio'),
                label('Input type file: ', inputFile('input-file', true, 'input type file')),
            ),
            fieldset('Select',
                label('Simple select: ').forId('select'),
                select('select',
                    option('option-1', 'Option 1'),
                    option('option-2', 'Option 2'),
                    option('option-3', 'Option 3')
                ).id('select'),
                label('With groups').forId('select-with-groups'),
                select('select-with-groups',
                    optgroup('Group 1',
                        option('option-1', 'Option 1'),
                        option('option-2', 'Option 2'),
                        option('option-3', 'Option 3')
                    ),
                    optgroup('Group 2',
                        option('option-4', 'Option 4'),
                        option('option-5', 'Option 5'),
                        option('option-6', 'Option 6')
                    ),
                    optgroup('Group 3',
                        option('option-7', 'Option 7'),
                        option('option-8', 'Option 8'),
                        option('option-9', 'Option 9')
                    )
                ).id('select-with-groups')
            ),
            fieldset('Textarea',
                textarea('text-area', 'Simple').style('resize', 'vertical'),
                textarea('text-area', 'With 5 rows and 5 cols').rows(5).cols(5).style('resize', 'vertical')
            ),
            fieldset('Datalist',
                input(null, 'input-datalist', true, 'input with datalist').set('list', 'datalist'),
                datalist('datalist',
                    option('Datalist opt 1'),
                    option('Datalist opt 2'),
                    option('Datalist opt 3')
                ),
                input(null, 'input-datalist-2', true, 'input with datalist with labels').set('list', 'datalist-2'),
                datalist('datalist-2',
                    option('Datalist opt 1', 'The first option'),
                    option('Datalist opt 2', 'The second option'),
                    option('Datalist opt 3', 'The third option')
                )
            ),
            fieldset('Output',
                inputNumber('a', false).set('value', 10).set('onchange', 'output.innerHTML = parseInt(a.value) + parseInt(b.value);'),
                '+',
                inputNumber('b', false).set('value', 10).set('onchange', 'output.innerHTML = parseInt(a.value) + parseInt(b.value);'),
                '=',
                label('Output: ', output('output', 'a b', '20').set('value', 20))
            ),
            fieldset('Progress',
                label('Progress (', span(0).id('done'), '/', span(10).id('total'), '): ', progress(0, 10).id('progress')),
                button('Increase Progress').set('onclick', 'progress.value = parseInt(progress.value) + 1; done.innerHTML = progress.value;'),
                button('Decrease Progress').set('onclick', 'progress.value = parseInt(progress.value) - 1; done.innerHTML = progress.value;')
            ),
            fieldset('Meter',
                label('5 of 10: ', meter(0, 10, 5, '5 of 10')),
                p('0 to 10, low = 3, high = 7, optimum = 10.'),
                p('Using different values.'),
                label(meter(0, 10, 0).low(3).high(7).optimum(10), '(value = 0)'),
                label(meter(0, 10, 1).low(3).high(7).optimum(10), '(value = 1)'),
                label(meter(0, 10, 2).low(3).high(7).optimum(10), '(value = 2)'),
                label(meter(0, 10, 3).low(3).high(7).optimum(10), '(value = 3)'),
                label(meter(0, 10, 4).low(3).high(7).optimum(10), '(value = 4)'),
                label(meter(0, 10, 5).low(3).high(7).optimum(10), '(value = 5)'),
                label(meter(0, 10, 6).low(3).high(7).optimum(10), '(value = 6)'),
                label(meter(0, 10, 7).low(3).high(7).optimum(10), '(value = 7)'),
                label(meter(0, 10, 8).low(3).high(7).optimum(10), '(value = 8)'),
                label(meter(0, 10, 9).low(3).high(7).optimum(10), '(value = 9)'),
                label(meter(0, 10, 10).low(3).high(7).optimum(10), '(value = 10)'),
            ),
            fieldset('Buttons',
                button('Button').set('onclick', 'alert("You clicked button!")'),
                inputButton('Input Type Button').set('onclick', 'alert("You clicked the Input type = button!")'),
                inputReset('Reset'),
                inputSubmit('Submit'),
                inputImage('https://visibleclassroom.com/wp-content/uploads/2018/05/new-send-button.png').style('width', '280px', 'height', '100px'),
            )
        )
    )
    .grid(
        [0,1,0],
        [0,2,0]
    )
    .build();