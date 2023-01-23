// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const palindrome = s.replace(/[^a-zA-Z0-9]*/g, '').toLocaleLowerCase();
    let i = 0;
    let j = palindrome.length - 1;
    while (i < j) {
        if (palindrome[i] !== palindrome[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// regex to remove everything
// everything to localelowercase
// get first and last letter and check if they're equal

console.log(isPalindrome('socorram me subi no onibus em marrocos'));
console.log(isPalindrome('arara'));
console.log(isPalindrome('arra'));
