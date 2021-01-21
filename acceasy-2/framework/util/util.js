
/**
 * Returns if a given content is an string.
 * @param {*} content 
 */
export function isString(content) {
    return (typeof content) == 'string'
}

/**
 * Returns if a given content is a number.
 * @param {*} content 
 */
export function isNumber(content) {
    return (typeof content) == 'number'
}

/**
 * Returns if a given content is a boolean.
 * @param {*} content 
 */
export function isBoolean(content) {
    return (typeof content) == 'boolean'
}

/**
 * Returns if a given content is a function.
 * @param {*} content 
 */
export function isFunction(content) {
    return (typeof content) == 'function'
}

/**
 * Returns if a given content is an object.
 * @param {*} content 
 */
export function isObject(content) {
    return (typeof content) == 'object'
}

/**
 * Returns if a given content is an array.
 * @param {*} content 
 */
export function isArray(content) {
    return Array.isArray(content)
}

/**
 * Returns if a given content is an empty array.
 * @param {*} content 
 */
export function isEmptyArray(content) {
    if (Array.isArray(content)) {
        return content.length == 0
    } else { 
        return false
    }
}

/**
 * Returns if the given content is an array ordered in ascending order.
 * @param {*} content 
 */
export function isAscendingArray(content) {
    if (!Array.isArray(content)) {
        return false
    }

    if (content.length <= 1) {
        return true
    }

    return !(content.findIndex((v, i, a) => { return i == 0 ? false : v < a[i-1] }) > -1)
}

/**
 * Returns if the given content is an array of one dimension.
 * @param {*} content 
 */
export function isSimpleArray(content) {
    if (!Array.isArray(content)) {
        return false
    }
    for (var i in content) {
        if (Array.isArray(content[i])) {
            return false
        }
    }
    return true
}

/**
 * Returns if the given array contains the indicated value.
 * @param {Array} array 
 * @param {*} value 
 */
export function arrayContains(array, value) {
    if (!array.length) {
        return false
    }
    return array.indexOf(value) > -1
}

/**
 * Returns the max depth of an array.
 * Examples 
 * [] has depth = 0
 * [1,2,3] has depth = 0
 * [1,2,3,[4,5,6]] has depth = 1
 * [1,2,3,[4,[5,[6]]]] has depth = 3
 * @param {*} content 
 */
export function arrayDepth(content) {
    if (!content.length) {
        return 0
    }
    function recursiveArrayDepth(array) {
        var depth = 0
        var subarray = false
        for (var i = 0; i < array.length; i++) {
            const v = array[i]
            if (Array.isArray(v)) {
                subarray = true
                depth += recursiveArrayDepth(v)
            }
        }
        if (subarray) {
            depth += 1
        }
        return depth
    }
    return recursiveArrayDepth(content)
}

/**
 * Reduces the array to have only one dimension.
 * It doens't modify the original array.
 * Examples
 * [] returns []
 * [1, 2, 3] return [1, 2, 3]
 * [[1], [[2]], [[[3]]]] returns [1, 2, 3]
 * @param {*} content 
 */
export function simplifyArray(content) {
    if (!content.length) {
        return []
    }
    var simplifiedArray = []
    function recursiveSimplifyArray(array) {
        for (var i in array) {
            const value = array[i]
            if (Array.isArray(value)) {
                recursiveSimplifyArray(value)
                continue
            }
            simplifiedArray.push(value)
        }
    }
    recursiveSimplifyArray(content)
    return simplifiedArray
}

/**
 * Fills the given array with its last element up to the indicated length.
 * @param {Array} array The array to be filled. It must be a not empty array.
 * @param {Number} length The new length. It must be non negative value greater than the current array length.
 */
export function fillArrayWithLastValueUpToLength(array, length) {
    const currentLength = array.length
    const lastValue = array[currentLength - 1]
    return array.concat(Array(length - currentLength).fill(lastValue))
}

/**
 * Returns if the given JSON object contains the indicated value in the values of one of its keys.
 * @param {JSON Object} e 
 * @param {*} value 
 */
export function objectContains(objc, value) {
    for (var key in objc) {
        if (objc[key] == value) {
            return true
        }
    }
    return false
}

/**
 * Add the class value for the HTML tag, overwritinig it or not.
 * @param {HTMLElement} tag
 * @param {string} name The class name.
 * @param {boolean} overwrite Default value is `false`.
 */
export function cls(tag, name, overwrite = false) {
    if (overwrite ?? false) {
        tag.setAttribute('class', name)
    } else {
        tag.setAttribute('class', `${tag.className} ${name}`)
    }
}

/**
 * Sets a list of properties to an HTML tag.
 * @param {HTMLElement} tag 
 * @param {Object} props An object containing the `prop:value` pairs.
 */
export function set(tag, props) {
    for (var prop in props) {
        const value = props[prop]
        if (isBoolean(value)) {
            if (value) {
                tag.setAttribute(prop, prop)
            } else {
                tag.removeAttribute(prop)
            }
        } else if (isString(value) || isNumber(value)) {
            tag.setAttribute(prop, value)
        }
    }
}

export default {
    type: {
        isString,
        isNumber,
        isBoolean,
        isFunction,
        isObject,
        isArray
    },
    array: {
        isEmpty: isEmptyArray,
        isAscending: isAscendingArray,
        isSimple: isSimpleArray,
        contains: arrayContains,
        depth: arrayDepth,
        simplify: simplifyArray,
        fillWithLastValueUpToLength: fillArrayWithLastValueUpToLength
    },
    object: {
        contains: objectContains
    },
    dom: {
        cls,
        set
    }
}
