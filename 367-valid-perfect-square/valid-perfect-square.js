/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let odd = 1;

    while (num > 0) {
        num -= odd;
        odd += 2;
    }

    return num === 0;
};