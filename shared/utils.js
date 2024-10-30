import util from 'util';
/**
 *
 * @param {Object} object
 */
export function logObject(object) {
    console.log(util.inspect(object, { showHidden: false, depth: null, colors: true }));
}

/**
 * Used to print arrays inline
 * @param {Array} arr
 */
export function formatInlineArray(arr) {
    return util.inspect(arr, { compact: true, colors: true });
}
