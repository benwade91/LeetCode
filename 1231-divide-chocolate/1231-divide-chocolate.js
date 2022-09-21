/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function(sweetness, k) {
    let low = 1;
    let high = Math.floor(sweetness.reduce((a,b)=> a+b, 0) / (k+1))
    while(low < high){
        let mid = Math.floor((low + high + 1) / 2);
        let cuts = 0;
        let currSweetness = 0;
        for(let piece of sweetness){
            currSweetness += piece;
            if(currSweetness >= mid){
                cuts++;
                currSweetness = 0
            }
        }
        if(cuts > k) low = mid;
        else high = mid - 1
    }
    return low
};