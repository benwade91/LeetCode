/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let mid = false;
    let midChar;
    let map = {};
    for(let char of s) map[char] = (map[char] || 0) + 1;
    for(let char of s){
        if(map[char] % 2 == 1 && !mid){
            mid = true;
            midChar = char
        }
        else if(map[char] % 2 == 1 && char !== midChar) return false;
    }
    return true
};