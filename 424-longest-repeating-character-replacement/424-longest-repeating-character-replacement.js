/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0, r = 0, max = 0, map = {};
    while(r < s.length){
        const char = s[r];
        map[char] = map[char] + 1 || 1;
        
        max = Math.max(max, map[char]);
        
        if(r-l+1-max > k){
            map[s[l]]--;
            l++;
        }
        r++
    }
    return r-l
};


