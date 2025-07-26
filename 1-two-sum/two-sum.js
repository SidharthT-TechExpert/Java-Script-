/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let out = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            i != j ? (nums[j] + nums[i] === target ? out.push(i, j) : null) : null;
        }

    }
    return out;
};