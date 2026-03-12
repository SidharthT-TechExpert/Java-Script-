/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let sortArr = nums.sort((a,b) => a-b);
    let out = []
    for (let i = 0; i < nums.length; i+=2) {
        // for (let j = i+1; j < nums.length; j++) {
        //     out.push(nums[j],nums[i])
        // }
      out.push(sortArr[i+1],sortArr[i])
      
    }
    console.log(sortArr)
return out
};