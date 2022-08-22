/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let res = 0;
    for(let i = 1; i < num; i++){
        if(num % i == 0) res += i;
    }
    return res == num
};