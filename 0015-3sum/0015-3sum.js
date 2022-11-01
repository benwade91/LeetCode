/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    const res = [];
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue
        const curr = nums[i];
        let left = i+1;
        let right = nums.length-1;
        while(left < right){
            const sum = curr + nums[left] + nums[right];
            if(sum == 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                while(nums[left] == nums[left-1]) left++;
            }
            if(sum < 0) left++;
            if(sum > 0) right--;
        }
    }
    return res
};