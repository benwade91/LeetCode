/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(n < m) [m,n] = [n,m]
    const dp = Array(m).fill(1);
    for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++){
            dp[j] += dp[j-1];
        }
    }
    return dp[m-1];
};