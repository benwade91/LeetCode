/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a,b)=>a-b);
    
    while(stones.length > 1){
        let a = stones.pop();
        let b = stones.pop();
        stones.push(Math.abs(a-b))
        let i = stones.length-2;
        let sorted = false;
        while(!sorted){
            if(stones[stones.length-1] > stones[i]) sorted = true;
            else {
                while(stones[i+1] < stones[i]){
                    [stones[i+1], stones[i]] = [stones[i], stones[i+1]]
                    i--;
                }
                sorted = true;
            }
        }
    }
    return stones[0] || 0;
};