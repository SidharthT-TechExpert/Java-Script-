/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumProduct = function (nums) {
    let newA = nums.reduce((acc, curr) => {

        // largest
        if (curr > acc.larg) {
            acc.therd = acc.second;
            acc.second = acc.larg;
            acc.larg = curr;
        } else if (curr > acc.second) {
            acc.therd = acc.second;
            acc.second = curr;
        } else if (curr > acc.therd) {
            acc.therd = curr;
        }

        // smallest
        if (curr < acc.min1) {
            acc.min2 = acc.min1;
            acc.min1 = curr;
        } else if (curr < acc.min2) {
            acc.min2 = curr;
        }

        return acc;
    }, {
        larg: -Infinity,
        second: -Infinity,
        therd: -Infinity,
        min1: Infinity,
        min2: Infinity
    });

    return Math.max(
        newA.larg * newA.second * newA.therd,
        newA.min1 * newA.min2 * newA.larg
    );
};
