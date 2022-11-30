/**
 * @param {string} s
 * @return {number}
 */
const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

var romanToInt = function(s) {
    let res = 0;
    if(s.length == 1) return map[s[0]]
    for(let i = 0; i < s.length; i++){
        const a = map[s[i]]
        const b = map[s[i+1]]
        if(a >= b || !b) res += a;
        else{
            res += b-a;
            i++
        }
    }
    return res
};