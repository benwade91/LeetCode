/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let dp = [...new Array(s.length)].map(()=>new Array(s.length).fill(false));
    let longest = s[0];
    
    for(let i = 0; i < s.length; i++) dp[i][i] = true;
    for(let i = 0; i < s.length-1; i++){
        if(s[i] === s[i+1]){
            dp[i][i+1] = true;
            longest = s.substring(i, i+2);
        }
    } 
    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j]) longest = longest.length < (j - i + 1) ? 
                s.substring(i, j + 1) : longest;
        }
    }
    
    return longest
};