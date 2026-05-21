/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
         
     while(n){
        if(!nums.includes(n)){
         return n;
        }
        n--;
     }

     return 0;
};