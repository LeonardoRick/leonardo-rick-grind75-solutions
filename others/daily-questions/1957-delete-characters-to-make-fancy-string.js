/*
 * @lc app=leetcode id=1957 lang=javascript
 *
 * [1957] Delete Characters to Make Fancy String
 * https://leetcode.com/problems/delete-characters-to-make-fancy-string/description/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let fancy = '';
    let count = 0;
    let lastCharacter = '';

    for (let character of s) {
        if (character === lastCharacter) {
            count++;
        } else {
            count = 0;
        }

        if (count < 2) {
            fancy += character;
        }

        lastCharacter = character;
    }
    return fancy;
};
// @lc code=end

console.log(makeFancyString('leeetcode')); // leetcode
