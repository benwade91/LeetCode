/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    const topsCount = new Array(7).fill(0);
    const bottomsCount = new Array(7).fill(0);
    const same = new Array(7).fill(0);
    for(let i = 0; i < tops.length; i++){
        topsCount[tops[i]]++;
        bottomsCount[bottoms[i]]++;
        if(tops[i] == bottoms[i]) same[tops[i]]++
    }
    for (let i = 1; i <= 6; i++) {
        if (topsCount[i] + bottomsCount[i] - same[i] == tops.length) {
            return Math.min(topsCount[i] - same[i], bottomsCount[i] - same[i]);
        }
    }
    return -1;
};