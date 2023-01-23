// https://leetcode.com/problems/binary-search/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let max = nums.length - 1;
    let min = 0;
    let i;
    while (max >= min) {
        i = Math.floor((max + min) / 2);
        if (target === nums[i]) {
            return i;
        }

        if (target > nums[i]) {
            min = i + 1;
        } else {
            max = i - 1;
        }
    }
    return -1;
};

console.log(search([1, 2, 3, 4, 5, 6, 7, 10, 21], 4));
