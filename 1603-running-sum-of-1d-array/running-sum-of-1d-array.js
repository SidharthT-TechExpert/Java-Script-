/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let newArray = [];
    for (let num of nums) {
        if (newArray.length) {
            newArray.push(newArray[newArray.length - 1] + num);
        } else {
            newArray.push(num)
        }
    }
    return newArray;
};