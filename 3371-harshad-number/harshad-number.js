/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = 0;
    let temp = x;

    // calculate sum of digits
    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }

    // check Harshad condition
    return x % sum === 0 ? sum : -1;
};