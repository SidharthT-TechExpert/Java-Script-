/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let newArray = [];
    let sum = 0;
    nums.forEach((num) => {
        sum += num;
        newArray.push(sum)
    });
    return newArray;
};