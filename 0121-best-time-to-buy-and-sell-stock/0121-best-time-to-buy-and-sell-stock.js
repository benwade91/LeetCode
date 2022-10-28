/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    let prevMin = Infinity;
    for(let n of prices){
        res = Math.max(res, n - prevMin);
        prevMin = Math.min(n, prevMin)
    }
    return res;
};