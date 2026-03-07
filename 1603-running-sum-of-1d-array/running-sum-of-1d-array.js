/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    outArray = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        lastIndex = outArray.length - 1;
        const sum = outArray[lastIndex] + nums[i]
        outArray.push(sum);
    }
    return outArray;
};