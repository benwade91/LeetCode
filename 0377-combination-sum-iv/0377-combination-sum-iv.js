/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let combos = new Array(target+1).fill(0);
    combos[0] = 1;
    
    for(let i = 0; i <= target; i++){
        for(let num of nums){
            if(i-num >= 0) combos[i] += combos[i-num]
        }
    }
    
    return combos[target];
};