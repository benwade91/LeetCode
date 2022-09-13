/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let dp = [], 
        l = 0, 
        r = height.length-1;
    [dp[l], dp[r]] = [0,0]
    l++
    r--
    while(l <= r){
        if(height[l-1] > height[r+1]) {
            dp[r] = Math.max((height[r+1]-height[r]), (dp[r+1]-height[r]), 0)
            height[r] = Math.max(height[r], height[r+1])
            r--
        }
        else {
            dp[l] = Math.max((height[l-1]-height[l]), (dp[l-1]-height[l]), 0)
            height[l] = Math.max(height[l], height[l-1])
            l++
        }
    }
    return dp.reduce((sum, a)=>sum+a,0)
};