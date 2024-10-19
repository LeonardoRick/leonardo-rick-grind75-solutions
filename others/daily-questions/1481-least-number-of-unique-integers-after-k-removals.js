// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/?envType=daily-question&envId=2024-02-16
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    const countMap = new Map();
    let removeCount = 0;

    for (const number of arr) {
        if (countMap.has(number)) {
            countMap.set(number, countMap.get(number) + 1);
        } else {
            countMap.set(number, 1);
        }
    }

    const entries = Array.from(countMap.entries()).sort((a, b) => a[1] - b[1]);
    for (const [n, count] of entries) {
        const removeAll = removeCount + count <= k;
        if (removeAll) {
            countMap.delete(n);
            removeCount += count;
        } else {
            break;
        }
    }
    return Array.from(countMap.keys()).length;
};

console.log(findLeastNumOfUniqueInts([5, 5, 4], 1));

console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
console.log(findLeastNumOfUniqueInts([2, 1, 1, 3, 3, 3], 3));
console.log(findLeastNumOfUniqueInts([1, 4, 1, 5, 1, 5, 5, 5, 5, 4], 3));

console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
console.log(
    findLeastNumOfUniqueInts(
        [
            13, 22, 100, 22, 5, 62, 13, 24, 81, 15, 99, 14, 20, 2, 61, 10, 40, 47, 33, 7, 38, 47, 92, 31, 15,
            40, 73, 48, 24, 55, 81, 63, 37, 23, 59, 78, 5, 50, 10, 51, 67, 9, 18, 78, 89, 40, 71, 7, 32, 67,
            6, 34, 69, 59, 19, 39, 96, 64, 81, 96, 64, 5, 82, 59, 29, 93, 42, 72, 38, 60, 82, 40, 97, 91, 4,
            22, 85, 80, 33, 51, 10, 21, 54, 91, 2, 94, 38, 38, 19, 75, 37, 7, 76, 7, 27, 8, 76, 11, 25, 5,
        ],
        78
    )
);
