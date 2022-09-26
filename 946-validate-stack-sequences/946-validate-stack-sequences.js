/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let i = 0;
    for(let num of pushed){
        stack.push(num);
        while(stack && i < pushed.length && stack[stack.length -1] === popped[i]){
            stack.pop()
            i++
        }
    }
    return i === pushed.length
};