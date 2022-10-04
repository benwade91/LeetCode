/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []
    
    const helper = (arr, sum, index) => {
        if(sum > target) return
        if(sum === target) result.push([...arr]);
        for(let i = index; i < candidates.length; i++){
            helper([...arr, candidates[i]], sum + candidates[i], i)
        }
    }
    
    helper([], 0, 0)
    
    return result;
};