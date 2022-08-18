/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let c of s){
        if(c == '(' || c == '{' || c == '[') stack.push(c);
        

        if(c == ')' || c == '}' || c == ']'){
            let d = stack.pop()
            
            if(d == '(' && c == ')') continue;
            else if(d == '{' && c == '}') continue;
            else if(d == '[' && c == ']') continue;
            else return false;
        }
    }
            console.log(stack)
    return stack.length === 0;
};