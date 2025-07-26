/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reversed;
    if (x >= 0)
        reversed = parseInt(x.toString().split('').reverse().join(''))
    else {
        reversed = - parseInt(Math.abs(x).toString().split('').reverse().join(''))
    }





    const MIN = - (2 ** 31)
    const MAX = (2 ** 31) - 1
    
    return (reversed >= MIN && reversed <= MAX) ? reversed : 0;
};