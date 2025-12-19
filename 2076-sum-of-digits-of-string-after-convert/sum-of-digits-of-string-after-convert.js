/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let numStr = '';
    for (let ch of s) {
        numStr += ch.charCodeAt(0) - 96;
    }

    let Sum = 0;

    while (k--) {
        Sum = 0;
        for (let Dig of numStr) {
            Sum += Number(Dig);
        }
        numStr = Sum.toString();
    }

    return Sum;
};