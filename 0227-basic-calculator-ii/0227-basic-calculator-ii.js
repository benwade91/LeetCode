/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let num = 0;
    let opp = '+'
    let stack = [];
    
    for (let i = 0; i <= s.length; i++){
        let char = s[i] || 'x';
        if(char == ' ') continue;
        if(char == '+' || char == '-' || char == '*' || char == '/' || char == 'x'){
            if(opp == '-') stack.push(-num)
            else if(opp == '+') stack.push(num)
            else if(opp == '*') stack.push(stack.pop() * num)
            else if(opp == '/') stack.push(~~(stack.pop() / num))
            opp = char;
            num = 0;
        }
        else {
            num = num * 10 + Number(char);
        }
    }
    return stack.reduce((a,b)=>a+b)
};