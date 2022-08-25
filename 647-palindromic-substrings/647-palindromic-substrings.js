/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = [];
    for(let i = 0; i < s.length; i++){
        let l = i, r = i;
        while(r<s.length){
            let subS = s.substring(l,r+1);
            if(isPalindrome(subS)) res.push(subS);
            r++;
        }
    }
    function isPalindrome(string){
        let l = 0, r = string.length-1;
        while(l < r){
            if(string[l] !== string[r]) return false;
            l++;
            r--;
        }
        return true;
    }
    return res.length
};