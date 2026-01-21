/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let freq = {};

    nums.forEach((num) => {
        freq[num] = (freq[num] || 0) + 1 ;
    });

    for(let num of nums){
        if(freq[num] === 1){
            return num;
        }
    }
};