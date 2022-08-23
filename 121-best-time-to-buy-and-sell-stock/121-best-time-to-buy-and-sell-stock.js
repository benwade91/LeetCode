/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    let l = 0
    let r = 1
    while(r < prices.length){
        if(prices[l] < prices[r]){
            res = Math.max(prices[r]-prices[l], res);
        } else l = r;
        r++;
    }
    return res
};