/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(num) {
    const numsMap = new Map([[0,0], [1,1], [6,9], [8,8], [9,6]]);
    let rotated = 0
    let n = num
    while(n > 0){
        if(!numsMap.has(n%10)) return false;
        rotated = (rotated * 10) + numsMap.get(n%10)
        n = Math.floor(n/10);
    }
    return num !== rotated
};