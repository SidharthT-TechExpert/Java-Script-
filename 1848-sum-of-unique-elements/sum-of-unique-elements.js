/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
   let freq = {};
   let sum = 0 ;

   nums.forEach((num) => {
    freq[num] = (freq[num] || 0) +1
   });

    for(let num in freq){
        if(freq[num] == 1){
            sum+=Number(num);
        }
    }
    return sum;
};