/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        stones.sort((a,b) => a-b);
        let a = stones.pop();
        let b = stones.pop();
        stones.push(Math.abs(a-b))
    }
    return stones[0] || 0;
};