/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []
    const dfs = (arr, i) => {
        if(arr.length > nums.length) return
        res.push([...arr])
        for(let j = i; j < nums.length; j++){
            arr.push(nums[j])
            dfs(arr, j+1);
            arr.pop()
        }
    }
    dfs([], 0)
    return res
};