/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const lettersCount = {
        ransomNote: {},
        magazine: {},
    };
    for (const letter of ransomNote) {
        if (lettersCount.ransomNote.hasOwnProperty(letter)) {
            lettersCount.ransomNote[letter]++;
        } else {
            lettersCount.ransomNote[letter] = 1;
        }
    }

    for (const letter of magazine) {
        if (lettersCount.magazine.hasOwnProperty(letter)) {
            lettersCount.magazine[letter]++;
        } else {
            lettersCount.magazine[letter] = 1;
        }
    }

    for (const [letter, count] of Object.entries(lettersCount.ransomNote)) {
        if (!lettersCount.magazine.hasOwnProperty(letter) || lettersCount.magazine[letter] < count) {
            return false;
        }
    }
    return true;
};

console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'aab')); // true
