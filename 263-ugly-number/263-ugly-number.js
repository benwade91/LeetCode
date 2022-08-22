/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n > 0){
        for(let x of [2,3,5]){
            while(n % x == 0){
                n/=x
            }
        }
    }
    return n === 1;
};