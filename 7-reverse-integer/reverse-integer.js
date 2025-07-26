/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    // if(  x >= 0 )
    //   return parseInt(x.toString().split('').reverse().join('')) 

    //  x = - x 

    //  x =  - (parseInt(x.toString().split('').reverse().join(''))) 

    //  return x ;
//sdfsdf
    const MIN = -2147483648;
    const MAX = 2147483647;

    let sign = x < 0 ? -1 : 1;
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;

    if (reversed < MIN || reversed > MAX) {
        return 0;
    }

    return reversed;
};