// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    const countS = {};
    const countT = {};
    if (s.length !== t.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (countS.hasOwnProperty(s[i])) {
            countS[s[i]]++;
        } else {
            countS[s[i]] = 1;
        }

        if (countT.hasOwnProperty(t[i])) {
            countT[t[i]]++;
        } else {
            countT[t[i]] = 1;
        }
    }

    for (const key of Object.keys(countS)) {
        if (!countT.hasOwnProperty(key) || countS[key] !== countT[key]) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram('rat', 'car'));
console.log(isAnagram('a', 'ab'));
