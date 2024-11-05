/*
 * @lc app=leetcode id=2684 lang=javascript
 * [2914] Minimum Number of Changes to Make Binary String Beautiful
 * https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/
 */
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let counter = 0;
    for (let i = 0; i < s.length; i+=2) {
        if (s[i] !== s[i+1]) {
            counter++;
        }
    }
    return counter;
};
// @lc code=end

console.log(minChanges('1001')); // 2
console.log(minChanges('10')); // 0
console.log(minChanges('0000')); // 0
console.log(minChanges('1100')); // 0
