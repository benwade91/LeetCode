/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const map = {};
    let count = 0;
    for(let c of jewels) map[c] = 1;
    for(let c of stones) if(map[c]) count++;
    return count;
};