import util from 'util';
/**
 *
 * @param {Object} object
 */
export function logObject(object) {
    console.log(util.inspect(object, { showHidden: false, depth: null, colors: true }));
}
