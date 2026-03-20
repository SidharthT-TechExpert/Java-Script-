/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    let avgs = [];

    while (nums.length > 1) {
        let max = Math.max(...nums);
        let min = Math.min(...nums);

        let avg = (max + min) / 2;

        nums.splice(nums.indexOf(max), 1);
        nums.splice(nums.indexOf(min), 1);

        avgs.push(avg);
    }

    return Math.min(...avgs);
};