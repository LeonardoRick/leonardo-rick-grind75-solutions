// https://leetcode.com/problems/valid-parentheses/description/
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const pipe = [];
    const correspondingObject = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        // O(1)
        if (correspondingObject.hasOwnProperty(curr)) {
            // O(n)
            pipe.push(correspondingObject[curr]);
        } else if (pipe.pop() !== curr) {
            return false;
        }
    }
    return pipe.length === 0;
};

// console.log(isValid('(')); //         false
// console.log(isValid('()[]{}')); //    true
// console.log(isValid('(]')); //        false
// console.log(isValid('({([])})')); //  true
// console.log(isValid('({([[])})')); // false
// console.log(isValid(']')); //         false
