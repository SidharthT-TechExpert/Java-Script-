/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {

    const out = [];

    for (let i = 0; i < n; i++) {
        out.push(nums[i], nums[i + n])
    };

    return out;

};