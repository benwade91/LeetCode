/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let mid = Math.floor(nums.length / 2);
    let left = 0, right = nums.length-1;
    while(left < right){
        if(nums[mid] == target) return mid;
        if(nums[mid] > target){
            right = mid-1;
            mid = Math.floor((right+left) / 2);
        } else {
            left = mid+1;
            mid = Math.floor((right+left) / 2);
        }
    }
    return nums[left] == target ? left : -1
};