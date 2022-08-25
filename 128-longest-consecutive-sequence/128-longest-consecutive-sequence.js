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
//         count backwards from the number, deleting the numbers from the set as you go
        while(set.has(temp)){
            count++
            set.delete(temp)
            temp--
        }
//         count from the number going forward, deleting as you go
        while(set.has(num)){
            count++
            set.delete(num)
            num++
        } 
        
        max = Math.max(max, count)
    }
    return max
};