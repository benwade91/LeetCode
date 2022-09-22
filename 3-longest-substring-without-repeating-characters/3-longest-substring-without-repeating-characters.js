/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {}
    let max = 0;
    let l = 0;
    for(let r = 0; r < s.length; r++){
        if(!map[s[r]]){
            map[s[r]] = 1
        } else {
            while(map[s[r]]){
                map[s[l]] = 0
                l++
            }
        }
        map[s[r]] = 1
        max = Math.max(max, r-l+1)
    }
    return max
};