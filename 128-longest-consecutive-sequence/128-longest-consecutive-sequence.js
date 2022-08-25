/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let max = 0;
    for(let num of set){
        let count = 0;
        let temp = num-1
        while(set.has(temp)){
            count++
            set.delete(temp)
            temp--
        }
        while(set.has(num++)){
            count++
        }
        max = Math.max(max, count)
    }
    return max
};