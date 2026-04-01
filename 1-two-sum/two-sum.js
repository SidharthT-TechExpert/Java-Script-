/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const complete = target - nums[i];
        if (map[complete] !== undefined) {
            return [map[complete], i]
        }
        map[nums[i]] = i;
    }
};
