/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
   const newS = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
   return newS == newS.split('').reverse().join('');
};