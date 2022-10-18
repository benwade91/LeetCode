/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let first = 1;
    let length = 1;
    let digits = 9;
    while(n > length * digits){
        n -= length*digits;
        first *= 10;
        digits *= 10;
        length += 1;
    }
    first += Math.floor((n-1)/length)
    first = String(first);
    return Number(first[(n-1) % length])
};