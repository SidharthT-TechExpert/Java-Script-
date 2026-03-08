/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
    let ones = 0;

    for (let char of s) {
        if (char === '1') ones++;
    }

    let zeros = s.length - ones;

    return '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1';
};