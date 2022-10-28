/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let [l,r] = [0,nums.length-1];
    while(l < r){
        let mid = Math.floor((r+l) / 2);
        if(nums[r] < nums[mid]) l = mid+1;
        else r = mid;
    }
    return nums[l];
};