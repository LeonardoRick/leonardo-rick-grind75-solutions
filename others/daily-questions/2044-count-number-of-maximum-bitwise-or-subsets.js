// https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/?envType=daily-question&envId=2024-10-18
/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
    const subsets = [[]];
    const orsCount = {};
    for (const el of nums) {
        const last = subsets.length-1;
        for (let i = 0; i <= last; i++) {
            const sub = [...subsets[i], el];
            subsets.push(sub);
            const or = sub.reduce((acum, curr) => acum | curr, 0);
            if (orsCount.hasOwnProperty(or)) {
                orsCount[or]++;
            } else {
                orsCount[or] = 1;
            }
        }
    }

    return Math.max(...Object.values(orsCount));
}


const res = countMaxOrSubsets([3, 2, 1,  5]);
console.log(res)
// res.forEach(r => console.log(r));



// https://stackoverflow.com/questions/42773836/how-to-find-all-subsets-of-a-set-in-javascript-powerset-of-array
// el = 1
// last = 0
// i = 0
// subsets = [[], [1]]
// i = 1 - break;

// el = 2
// last = 1;
// i = 0;
// subsets = [[], [1], [2]]
// i = 1
// subsets = [[], [1], [2], [1, 2]]

// function getSubsets(list) {
//     const subsets = [[]];
//     for (const el of list) {
//         const length = subsets.length;
//         for (let i = 0; i < length; i++) {
//             subsets.push([...subsets[i], el])
//         }
//     }
//     return subsets.slice(1);
// }

// const res = getSubsets([1, 2, 3]);
// res.forEach(r => console.log(r));
// console.log(res.length)
