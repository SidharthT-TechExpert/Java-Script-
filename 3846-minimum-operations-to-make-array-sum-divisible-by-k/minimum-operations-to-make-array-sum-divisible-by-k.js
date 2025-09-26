/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = function (nums, k) {
    const total = nums.reduce((acc, curr) => acc + curr, 0);

    return total % k;
};