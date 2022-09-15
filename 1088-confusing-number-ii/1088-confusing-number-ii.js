/**
 * @param {number} n
 * @return {number}
 */
var confusingNumberII = function(n) {
    return generateNums(0, n);
};
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
var generateNums = function(num, max){
    const valid = [0,1,6,8,9];
    let count = 0;
    for(let n of valid){
        let curr = (num*10) + n;
        if(curr < 1) continue;
        if(curr > max) return count;
        if(confusingNumber(curr)) count++;
        count += generateNums(curr, max);
    }
    return count
}