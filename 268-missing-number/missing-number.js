/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;

    // if(n === 1){
    //     if(nums.includes(1)){
    //         return 0;
    //     }else{
    //         return 1;
    //     }
    // }
     
     while(n){
        if(!nums.includes(n)){
         return n;
        }
        n--;
     }

     return 0;
};