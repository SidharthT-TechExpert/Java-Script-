/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    newS = s.split('').sort().join('');
    newT = t.split('').sort().join('');

    return newS === newT;
};