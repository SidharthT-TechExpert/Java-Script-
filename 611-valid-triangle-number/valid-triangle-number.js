/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    nums.sort((a, b) => a - b); // Sort array in ascending order
    let n = nums.length;
    let count = 0;

    for (let k = n - 1; k >= 2; k--) {
        let i = 0, j = k - 1;
        while (i < j) {
            if (nums[i] + nums[j] > nums[k]) {
                count += j - i; // All pairs from i to j-1 with j form valid triangle
                j--;
            } else {
                i++;
            }
        }
    }

    return count;
};