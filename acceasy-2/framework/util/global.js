// import SystemMessage from '../Elements/system/SystemMessage.js'
import util from './util.js'

export default window.acceasy = {

    currentPage: null,

    error: (message) => {
        return {
            success: false,
            error: message
        }
    },

    errorMessage: (content) => {
        return {
            success: false,
            error: new SystemMessage(content, SystemMessage.Type.error)
        }
    },
    
    success: { success: true },

    type: util.type, 
    array: util.array, 
    dom: util.dom

}