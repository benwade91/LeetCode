/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = [];
    let n = cost.length-1;
    dp[0] = cost[0]
    dp[1] = cost[1]
    for(let i = 2; i<=n; i++){
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])
    }
    return Math.min(dp[n], dp[n-1]);
};