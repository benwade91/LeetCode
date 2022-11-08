/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    
    for(let c of s){
        if(c !== "]") stack.push(c);
        else{
            let subString = "";
            while(stack.length && stack[stack.length-1] !== "["){
                subString = stack.pop() + subString
            }
            stack.pop()
            let num = ""
            while(stack.length && !isNaN(stack[stack.length-1])){
                num = stack.pop() + num
            }
            stack.push(subString.repeat(Number(num)))
        }
    }
    return stack.join("")
};