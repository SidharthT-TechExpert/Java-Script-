/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    const digitSum = (n) => {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10)
        }
        return sum;
    }

    for (let i = 0; i < nums.length; i++) {
        const value = (digitSum(nums[i]) === i) ? i : null
        if (value !== null)
            return value;
    }
    return -1;
};