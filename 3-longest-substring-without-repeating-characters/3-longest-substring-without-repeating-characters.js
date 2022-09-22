/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {}
    let max = 0;
    let count = 0
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] === undefined){
            map[s[i]] = i;
            count++;
            max = Math.max(count, max)
        } else {
            i = map[s[i]];
            map = {}
            count = 0;
            
        }
    }
    return max
};