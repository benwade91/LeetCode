/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
//     sort stones in ascending order
    stones.sort((a,b)=>a-b);
    while(stones.length > 1){
        let a = stones.pop();
        let b = stones.pop();
        stones.push(Math.abs(a-b))
        let i = stones.length-2;
        let sorted = false;
        while(!sorted){
//             if last stone is greatest, stones are sorted
            if(stones[stones.length-1] >= stones[i]) sorted = true;
            else {
//                 while stone is out of order, bubble down;
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