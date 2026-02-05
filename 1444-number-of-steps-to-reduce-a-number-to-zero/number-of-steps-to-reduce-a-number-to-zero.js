/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let steps = 0;

    for (; ;) {
        if (num === 0) break;
        steps++;
        if (num % 2) {
            num--;
        } else {
            num /= 2;
        }
    }
    return steps;
};