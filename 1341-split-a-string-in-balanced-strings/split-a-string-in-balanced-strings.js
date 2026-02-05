/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let count = 0;
    let balance = 0;

    for (let char of s) {
        if (char === 'L') {
            balance++;
        } else {
            balance--;
        }

        if (balance) continue;
        count++;
    }

    return count;
};