/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {

    const digitSum = (n) => {
        n = Math.abs(n);

        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = parseInt(n / 10);
        }

        return sum;
    }
    for (let i = 0; i < nums.length; i++) {
        if (digitSum(nums[i]) === i) {
            return i;
        }
    }
    return -1;
};