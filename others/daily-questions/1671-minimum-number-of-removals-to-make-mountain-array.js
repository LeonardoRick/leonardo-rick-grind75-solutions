/*
 * @lc app=leetcode id=1671 lang=javascript
 *
 * [1671] Minimum Number of Removals to Make Mountain Array
 * https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/description/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    if ( nums.length === 3) {
        return 0;
    }
    const leftIncreasing = new Array(nums.length).fill(1);
    const rightDecreasing = new Array(nums.length).fill(1);
    let maxMountainLength = 0;


    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                leftIncreasing[i] =  Math.max(leftIncreasing[i], leftIncreasing[j] + 1);
            }
        }
    }



    for (let i = nums.length - 1; i >= 0; --i) {
        for ( let j = nums.length - 1; j > i; --j) {
            if (nums[i] > nums[j]) {
                rightDecreasing[i] = Math.max(rightDecreasing[i], rightDecreasing[j] + 1);
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        const increase = leftIncreasing[i];
        const decrease = rightDecreasing[i];
        const peak = increase + decrease - 1;
        console.log('peak', peak);
        if (increase > 1 && decrease > 1 &&  peak > maxMountainLength) {
            maxMountainLength = peak;
        }
    }

    return nums.length - maxMountainLength;
};
// @lc code=end


console.log(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1]));
console.log(minimumMountainRemovals([4, 3, 2, 1, 1, 2, 3, 1]));
// [2, 1, 1, 5, 6, 2, 3, 1]
// [ 1, 1, 1, 2, 3, 1, 2, 1 ]
// [ 2, 1, 1, 1, 2, 1, 2, 1 ]


// ?
// ? ChatGPT explanation on how to find the best solution
// ?

//  1.	Use Two DP Arrays for Increasing and Decreasing Sequences:
// -	•	We’ll create two arrays, left_incr and right_decr.
// -	•	left_incr[i] will store the length of the longest increasing subsequence ending at index i.
// -	•	right_decr[i] will store the length of the longest decreasing subsequence starting at index i.
//  2.	Calculate Longest Increasing Subsequences (LIS) for Each Position from the Left:
// -	•	Starting from the beginning, calculate the LIS ending at each index i and store the result in left_incr[i].
// -	•	For example, if we have [2, 1, 1, 5, 6, 2, 3, 1], we can compute the longest increasing subsequence up to each element.
//	3.	Calculate Longest Decreasing Subsequences (LDS) for Each Position from the Right:
// -	•	Similarly, starting from the end, calculate the LDS starting at each index i and store the result in right_decr[i].
// 	4.	Find Valid Peaks and Calculate Minimum Removals:
// -	•	For an index to be considered a potential peak, it must have an LIS of at least 2 on its left (left_incr[i] >= 2) and an LDS of at least 2 on its right (right_decr[i] >= 2).
// -	•	If an index meets these conditions, we can calculate the mountain length as left_incr[i] + right_decr[i] - 1 (subtracting 1 to avoid double-counting the peak element itself).
// -	•	Keep track of the longest mountain found. Finally, the minimum removals required will be the total length of the array minus the length of this longest mountain.

// Finding the biggest mountain will mean that the minimum number to be removed are the elements that are not on this mountain.



// ?
// ? My Reasoning
// ?
// On the first list I'll have all the values growing from beginning
// On the second list we'll have all the value growng from the end
// Summing up this value we have all the times we walked one floor up, if we could say.
// SUbtracting this value from the entire array length, "removes" the times we didn't walked up
// Be aware that peak = minimum removals. The biggest mountain will reflect the lowest numbers I need to remove to form any mountain.
