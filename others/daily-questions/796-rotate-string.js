/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s === goal) return true;

    const length = s.length;
    for (let _ = 0; _ < length; _++) {
        const sArray = Array.from(s);
        sArray.push(sArray.shift());
        s = sArray.join('');
        if (s === goal) {
            return true;
        }
    }
    return false;
};

// The above solution is valid and works but there's a faster solution:
// 1. Checking if both strings have the same length
// 2. Duplicates the s string and check if this duplicated string contains the goal inside of it.
// If both of this values are true, then shifting the string would eventually endup bringing the goal string to s

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s === goal) return true;
    const string = s + s;
    return s.length === goal.length && string.includes(goal);
};
// @lc code=end

console.log(rotateString('abcde', 'cdeab')); // true

