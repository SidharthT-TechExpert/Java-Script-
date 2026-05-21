/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums , n=nums.length) {
    //  while(n){
    //     if(!nums.includes(n)){
    //      return n;
    //     }
    //     n--;
    //  }

    if(!nums.includes(n)){
        return n;
    }



     return n === 1 ? 0 : missingNumber(nums,n-1)
};