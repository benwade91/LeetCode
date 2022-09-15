/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    /*
    Using a hashmap to store 
    */
    let res = 0, l = 0, r = 0, map = {}
    while(r < s.length){
        if(map[s[r]]){
            while(map[s[r]]){
                map[s[l]] = 0;
                l++
            }
        } else {
            map[s[r]] = 1;
            res = Math.max(res, 1+r-l);
            r++
        }
    }
    return res
};