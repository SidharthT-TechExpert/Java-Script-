/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let maxValue = [];
    const newArray = num.toString().split('');

    newArray.map((n, i) => {
        if (n !== '9') {
            const array = [...newArray];
            array.splice(i, 1, 9);
            maxValue.push(Number(array.join('')));
        }
    })

    const out = maxValue.length > 0 ? Math.max(...maxValue) : num;
    return out
};