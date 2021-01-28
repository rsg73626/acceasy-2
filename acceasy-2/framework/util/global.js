import util from './util.js'

export default window.acceasy = {

    framework: { },

    success: { success: true },
    error: (message) => ({ success: false, error: message }),

    type: util.type, 
    array: util.array, 
    object: util.object,
    dom: util.dom,

    lastTagId: 0,
    getNewTagId: () => `acceasy-auto-tag-id-${window.acceasy.lastTagId++}`

}