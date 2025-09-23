/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let newArray = [];
    nums.forEach((value, i) => {
        if (newArray.length) {
            newArray.push(value + newArray[i - 1])
        } else {
            newArray.push(value);
        }
    });
    return newArray;
};