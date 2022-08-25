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
        while(set.has(temp)) temp--;
        while(set.has(++temp)){
            count++
            max = Math.max(max, count)
            set.delete(temp)
        }
    }
    return max
};