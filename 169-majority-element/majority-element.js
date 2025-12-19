/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let freq = {};
    nums.forEach((num) => {
        freq[num] = (freq[num] || 0) + 1;
    });
    
     let majority = nums.length / 2;

     for(let keys in freq){
         if(freq[keys]>majority){
            return Number(keys);
         }
     }
};