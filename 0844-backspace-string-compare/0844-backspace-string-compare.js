/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let a = [];
    let b = [];
    for(let c of s){
        if(c == '#') a.pop()
        else a.push(c)
    }
    for(let c of t){
        if(c == '#') b.pop();
        else b.push(c)
    }
    return a.join("") == b.join("")
};