import Base from './framework/html/document-metadata/Base.js'
import Link from './framework/html/document-metadata/Link.js'
import Meta from './framework/html/document-metadata/Meta.js'
import Style from './framework/html/document-metadata/Style.js'
import Title from './framework/html/document-metadata/Title.js'

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

import Address from './framework/html/grouping-content/Address.js'
import Blockquote from './framework/html/grouping-content/Blockquote.js'
import Dd from './framework/html/grouping-content/Dd.js'
import Div from './framework/html/grouping-content/Div.js'
import Dl from './framework/html/grouping-content/Dl.js'
import Dt from './framework/html/grouping-content/Dt.js'
import Figcaption from './framework/html/grouping-content/Figcaption.js'
import Figure from './framework/html/grouping-content/Figure.js'
import Hr from './framework/html/grouping-content/Hr.js'
import Kbd from './framework/html/text-level-semantics/Kbd.js'
import Li from './framework/html/grouping-content/Li.js'
import Main from './framework/html/grouping-content/Main.js'
import Ol from './framework/html/grouping-content/Ol.js'
import P from './framework/html/grouping-content/P.js'
import Pre from './framework/html/grouping-content/Pre.js'
import Ul from './framework/html/grouping-content/Ul.js'

import Article from './framework/html/sections/Article.js'
import Aside from './framework/html/sections/Aside.js'
import Footer from './framework/html/sections/Footer.js'
import H from './framework/html/sections/H.js'
import Header from './framework/html/sections/Header.js'
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
import B from './framework/html/text-level-semantics/B.js'
import Bdi from './framework/html/text-level-semantics/Bdi.js'
import Bdo from './framework/html/text-level-semantics/Bdo.js'
import Br from './framework/html/text-level-semantics/Br.js'
import Cite from './framework/html/text-level-semantics/Cite.js'
import Code from './framework/html/text-level-semantics/Code.js'
import Data from './framework/html/text-level-semantics/Data.js'
import Dfn from './framework/html/text-level-semantics/Dfn.js'
import Em from './framework/html/text-level-semantics/Em.js'
import I from './framework/html/text-level-semantics/I.js'
import Mark from './framework/html/text-level-semantics/Mark.js'
import Q from './framework/html/text-level-semantics/Q.js'
import Rb from './framework/html/text-level-semantics/Rb.js'
import Rp from './framework/html/text-level-semantics/Rp.js'
import Rt from './framework/html/text-level-semantics/Rt.js'
import Rtc from './framework/html/text-level-semantics/Rtc.js'
import Ruby from './framework/html/text-level-semantics/Ruby.js'
import S from './framework/html/text-level-semantics/S.js'
import Samp from './framework/html/text-level-semantics/Samp.js'
import Small from './framework/html/text-level-semantics/Small.js'
import Span from './framework/html/text-level-semantics/Span.js'
import Strong from './framework/html/text-level-semantics/Strong.js'
import Sub from './framework/html/text-level-semantics/Sub.js'
import Sup from './framework/html/text-level-semantics/Sup.js'
import Time from './framework/html/text-level-semantics/Time.js'
import U from './framework/html/text-level-semantics/U.js'
import Var from './framework/html/text-level-semantics/Var.js'
import Wbr from './framework/html/text-level-semantics/Wbr.js'

import Menu from './framework/html/custom/Menu.js'
import MenuItem from './framework/html/custom/MenuItem.js'
import Tag from './framework/html/custom/Tag.js'

import MenuSize from './framework/enum/MenuSize.js'
import MenuIconPosition from './framework/enum/MenuIconPosition.js'

const tags = [
    Base, Link, Meta, Style, Title,
    Img,
    Button, Datalist, Fieldset, Form, Input, Label, Legend, Meter, Optgroup, Option, Output, Progress, Select, Textarea,
    Address, Blockquote, Dd, Div, Dl, Dt, Figcaption, Figure, Hr, Kbd, Li, Main, Ol, S, Samp, Small, Sub, Sup, P, Pre, Ul,
    Article, Aside, Footer, H, Header, Nav, Section,
    Caption, Col, Colgroup, Table, Tbody, Td, Tfoot, Th, Thead, Tr,
    A, Abbr, Acronym, B, Bdi, Bdo, Br, Cite, Code, Data, Dfn, Em, I, Mark, Q, Rb, Rp, Rt, Rtc, Ruby, Span, Strong, Time, U, Var, Wbr
]

const customs = [
    Menu, MenuItem, Tag
]

const elements = [...tags, ...customs]

const enums = [
    MenuSize, MenuIconPosition
]

var html = {

    tags: tags,

    enums: enums,

    setElementsGlobally: (namespace) => {
        if (acceasy.didSetElements) {
            return
        }

        var replaceds = { }
        // set elements in window function
        const setInWindow = (key, value) => {
            if (window[key]) {
                replaceds[key] = window[key]
            }
            window[key] = value
        }
        // set elements in namespace in window function
        const setInNamespace = (key, value) => {
            window[namespace][key] = value
        }

        var set = setInWindow
        if (namespace) {
            setInWindow(namespace, {})
            set = setInNamespace
        }
 
        elements.forEach(tag => {
            for (var name in tag.buildFunctions) {
                set(name, tag.buildFunctions[name])
            }
        })
        enums.forEach(e => {
            set(e.___name___, e)
        })

        if (namespace) {
            setInWindow('replaceds', replaceds)
        }

        acceasy.didSetElements = true
    }

}

tags.forEach(tag => {
    for (var buildFunctionName in tag.buildFunctions) {
        html[buildFunctionName] = tag.buildFunctions[buildFunctionName]
    }
})

export default html