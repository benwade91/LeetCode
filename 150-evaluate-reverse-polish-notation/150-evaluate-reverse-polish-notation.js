/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let ops = {
        '+':(a,b)=>a+b,
        '-':(a,b)=>a-b,
        '*':(a,b)=>a*b,
        '/':(a,b)=>a/b >= 0 ? Math.floor(a/b) : Math.ceil(a/b)
    };
    for(let char of tokens){
        if(ops[char]){
            let b = stack.pop();
            let a = stack.pop();
            stack.push(ops[char](a,b))
        } else {
            stack.push(Number(char));
        }
    }
    return stack.pop();
};