/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    
    const helper = (idx) => {
        if(idx === nums.length) res.push([...nums])
        for(let i = idx; i < nums.length; i++){
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            helper(idx+1);
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
        }
    }
    
    helper(0)
    return res
};