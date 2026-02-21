/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let array = []

    for (let i = 1; i <= n; i++) {
        if (!(i % 3) && !(i % 5)) {
            array.push('FizzBuzz');
        } else if (!(i % 3)) {
            array.push('Fizz');
        } else if (!(i % 5)) {
            array.push('Buzz');
        } else {
            array.push(`${i}`)
        }
    }


    return array;
};