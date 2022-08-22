/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num <= 1) return false
    let res = 0;
    for(let i = 1; i < num/2+1; i++){
        if(num % i == 0) res += i;
    }
    console.log(res)
    return res == num
};