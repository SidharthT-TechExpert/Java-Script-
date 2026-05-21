/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    let n = nums.length;

    let expected = (n * (n + 1)) / 2;

    let actual = nums.reduce((sum, num) => sum + num, 0);

    return expected - actual;
};