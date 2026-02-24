/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let frq = {};

    for (let num of nums) {
        frq[num] = (frq[num] || 0) + 1;
    }

    for (let key in frq) {
        if (frq[key] !== 1) {
            return true;
        }
    }
    return false;
};