/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = []
    let l = 1;
    let r = 1;
    for(let num of nums){
        res.push(l)
        l *= num;
    }
    for(let i = nums.length-1; i >=0; i--){
        res[i] *= r;
        r *= nums[i]
    }
    return res
};