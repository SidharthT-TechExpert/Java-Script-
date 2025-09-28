/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
    if (n % 2) {
        return n * 2;
    }
    return n;
};