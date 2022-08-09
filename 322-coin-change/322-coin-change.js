/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let wallet = Array(amount+1).fill(Infinity);
    wallet[0] = 0;
    for(let coin of coins){
        for(let i = coin; i <= amount; i++){
            wallet[i] = Math.min(wallet[i], wallet[i-coin]+1);
        }
    }
    return wallet[amount] === Infinity ? -1 : wallet[amount]
};