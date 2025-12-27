/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let freq = {};

    nums.forEach((num) => {
        freq[num] = (freq[num] || 0) + 1;
    });

    for (let num in freq) {
        if (freq[num] > (nums.length / 2)) {
            return Number(num);
        }
    }
};