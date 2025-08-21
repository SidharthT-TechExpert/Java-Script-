/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
    let max = Math.max(a, b);
    let count = 1
    for (let i = 2; i <= max ; i++) {
        if (a % i === 0 && b % i === 0) {
            count++;
        }
    }
    return count;
};