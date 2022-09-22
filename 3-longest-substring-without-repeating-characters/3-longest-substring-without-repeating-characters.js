/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {}
    let max = 0;
    let l = 0;
    for(let r = 0; r < s.length; r++){
//         check if character is in map. if not assign val to 1
        if(!map[s[r]]){
            map[s[r]] = 1
        } else {
//             while char is in map, delete chars from map starting from left
            while(map[s[r]]){
                map[s[l]] = 0
                l++
            }
        }
//         assign char value of right index to 1
        map[s[r]] = 1
//         update max
        max = Math.max(max, r-l+1)
    }
    return max
};