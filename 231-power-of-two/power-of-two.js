/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    // if (n <= 0) return false;

    // let i = 0;
    // while (2 ** i <= n) {
    //     if (n == 2 ** i) return true;
    //     i++;
    // }

    // return false;
    return n > 0 && (n & (n - 1)) === 0;
};