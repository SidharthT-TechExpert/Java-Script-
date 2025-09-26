/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    const total = nums.reduce((acc, curr) => acc + curr, 0);

    if (total % k != 0) {
        return total % k;
    }
    return 0;

};