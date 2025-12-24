/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let out = [];

    nums.forEach((num, i) => {
        nums.forEach((num2, j) => {
            if (i != j && num + num2 === target) {
                out.push(i, j);
            }
        })
    })
    
    return [out[0], out[1]];
};