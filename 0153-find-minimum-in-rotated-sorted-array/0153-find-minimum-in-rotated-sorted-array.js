/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let [l,r] = [0, nums.length-1];
    while(l < r){
        const mid = Math.floor((l+r)/2);
        if(nums[r] < nums[mid]) l = mid+1
        else r = mid
    }
    return nums[l]
};