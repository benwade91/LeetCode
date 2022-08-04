/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n < 3) return n;
    let a = 1;
    let b = 2;
    while(n-- > 2){
        let temp = b;
        [b, a] = [b+a, temp]
    }
    return b
};