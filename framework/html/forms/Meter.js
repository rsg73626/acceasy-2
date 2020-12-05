import Element from '../Element.js'


export default class Meter extends Element {

    constructor(content, min = 0, max = 1, value = 0, low = null, high = null, optimum = null) {
        super(Meter.tagName, content)
        this.min(min)
        this.max(max)
        this.value(value)
        this.high(high)
        this.low(low)
        this.optimum(optimum)
    }

    min(value) {
        this.set('min', value)
        return this
    }

    max(value) {
        this.set('max', value)
        return this
    }

    low(value) {
        this.set('low', value)
        return this
    }

    high(value) {
        this.set('high', value)
        return this
    }

    optimum(value) {
        this.set('optimum', value)
        return this
    }

    value(val) {
        this.set('value', val)
        return this
    }

}

Meter.tagName = 'meter'

Meter.buildFunctions = {

    meter: (min, max, value, ...content) => {
        return new Meter(content, min, max, value)
    }

}