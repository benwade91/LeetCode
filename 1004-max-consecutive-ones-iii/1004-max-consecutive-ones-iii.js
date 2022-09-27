/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l = 0, r = 0;
    
    for(r = 0; r < nums.length; r++){
        if(nums[r] == 0) k--
        
        if(k < 0){
            k += 1 - nums[l];
            l++
        }
        console.log(l,r,k)
    }
    return r - l
};