// https://leetcode.com/problems/two-sum/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const alreadyChecked = {}
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const rest = target - curr;
        if (alreadyChecked.hasOwnProperty(rest)) {
            return [alreadyChecked[rest], i];
        }
        alreadyChecked[curr] = i;
    }
    return [-1, -1];
};

console.log(twoSum([2,7,11,15], 9))