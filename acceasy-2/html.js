import Style from './framework/html/document-metadata/Style.js'

import Img from './framework/html/embedded-content/Img.js'

import Button from './framework/html/forms/Button.js'
import Datalist from './framework/html/forms/Datalist.js'
import Fieldset from './framework/html/forms/Fieldset.js'
import Form from './framework/html/forms/Form.js'
import Input from './framework/html/forms/Input.js'
import Label from './framework/html/forms/Label.js'
import Legend from './framework/html/forms/Legend.js'
import Meter from './framework/html/forms/Meter.js'
import Optgroup from './framework/html/forms/Optgroup.js'
import Option from './framework/html/forms/Option.js'
import Output from './framework/html/forms/Output.js'
import Progress from './framework/html/forms/Progress.js'
import Select from './framework/html/forms/Select.js'
import Textarea from './framework/html/forms/Textarea.js'

import Figcaption from './framework/html/grouping-content/Figcaption.js'
import Figure from './framework/html/grouping-content/Figure.js'
import Li from './framework/html/grouping-content/Li.js'
import Main from './framework/html/grouping-content/Main.js'
import Ol from './framework/html/grouping-content/Ol.js'
import P from './framework/html/grouping-content/P.js'
import Ul from './framework/html/grouping-content/Ul.js'

import Article from './framework/html/sections/Article.js'
import Aside from './framework/html/sections/Aside.js'
import Footer from './framework/html/sections/Footer.js'
import H from './framework/html/sections/H.js'
import Header from './framework/html/sections/Header.js'
import Hgroup from './framework/html/sections/Hgroup.js'
import Nav from './framework/html/sections/Nav.js'
import Section from './framework/html/sections/Section.js'

import Caption from './framework/html/tabular-data/Caption.js'
import Col from './framework/html/tabular-data/Col.js'
import Colgroup from './framework/html/tabular-data/Colgroup.js'
import Table from './framework/html/tabular-data/Table.js'
import Tbody from './framework/html/tabular-data/Tbody.js'
import Td from './framework/html/tabular-data/Td.js'
import Tfoot from './framework/html/tabular-data/Tfoot.js'
import Th from './framework/html/tabular-data/Th.js'
import Thead from './framework/html/tabular-data/Thead.js'
import Tr from './framework/html/tabular-data/Tr.js'

import A from './framework/html/text-level-semantics/A.js'
import Abbr from './framework/html/text-level-semantics/Abbr.js'
import Acronym from './framework/html/text-level-semantics/Acronym.js'
import Br from './framework/html/text-level-semantics/Br.js'
import I from './framework/html/text-level-semantics/I.js'
import Span from './framework/html/text-level-semantics/Span.js'

import Menu from './framework/html/custom/Menu.js'
import MenuItem from './framework/html/custom/MenuItem.js'

import MenuSize from './framework/enum/MenuSize.js'
import MenuIconPosition from './framework/enum/MenuIconPosition.js'

const tags = [
    Style,
    Img,
    Button, Datalist, Fieldset, Form, Input, Label, Legend, Meter, Optgroup, Option, Output, Progress, Select, Textarea,
    Figcaption, Figure, Li, Main, Ol, P, Ul,
    Article, Aside, Footer, H, Header, Hgroup, Nav, Section,
    Caption, Col, Colgroup, Table, Tbody, Td, Tfoot, Th, Thead, Tr,
    A, Abbr, Acronym, Br, I, Span,
    Menu, MenuItem
]

var html = {

    tags: tags,

    setUpBuidFunctionsGlobally: () => {
        tags.forEach(tag => {
            for (var buildFunctionName in tag.buildFunctions) {
                window[buildFunctionName] = tag.buildFunctions[buildFunctionName]
            }
        })
        window['MenuSize'] = MenuSize,
        window['MenuIconPosition'] = MenuIconPosition
    },

    setUpBuidFunctionsGloballyUsingNameSpace: (nameSpace) => {
        if (!(nameSpace in window)) {
            window[nameSpace] = {}
        }
        tags.forEach(tag => {
            for (var buildFunctionName in tag.buildFunctions) {
                window[nameSpace][buildFunctionName] = tag.buildFunctions[buildFunctionName]
            }
        })
        window[nameSpace]['MenuSize'] = MenuSize,
        window['MenuIconPosition'] = MenuIconPosition
    }

}

tags.forEach(tag => {
    for (var buildFunctionName in tag.buildFunctions) {
        html[buildFunctionName] = tag.buildFunctions[buildFunctionName]
    }
})

export default html