// https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/description/?envType=daily-question&envId=2024-10-19
const invertedBitMap = {
    '0': '1',
    '1': '0'
}
/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {

    let s = '0';
    for (let i = 1; i < n; i++) {
        s = s + '1' + reverseInvert(s);
    }
    return s[k-1];
};

/**
 *
 * @param {string} s
 */
function reverseInvert(s) {
    let res = '';
    for (let i = s.length - 1; i >= 0; i--) {
        res+= invertedBitMap[s[i]];
    }
    return res;
}


/**
 * both functions below were replaced by the above one
 */
/**
 * @param {string} s
 */
function invert(s) {
    let res = '';
    for (const c of s) {
        res+= invertedBitMap[c];
    }
    return res;
}

/**
 * @param {string} s
 */
function reverse(s) {
    let res = '';
    for (let i = s.length - 1; i >= 0; i--) {
        res+= s[i]
    }
    return res;
}

console.log(findKthBit(3, 1)); // 1
console.log(findKthBit(4, 11)); // 1
