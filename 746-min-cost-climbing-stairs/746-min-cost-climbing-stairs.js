/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let curr = cost[1];
    let prev = cost[0];
    for(let i = 2; i < cost.length; i++){
        let temp = Math.min(curr, prev) + cost[i]
        prev = curr
        curr = temp
    }
    return Math.min(prev, curr);
};