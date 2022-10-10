/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 
 
 [1,1,2,1,1]
 sum = 4
 count = 2
 0:1
 1:1
 2:2
 3:1
 4:1
 
 */
var numberOfSubarrays = function(nums, k) {
    let map = {0:1};
    let count = 0;
    let sum = 0;
    for(let num of nums){
        let curr = num%2==1 ? 1 : 0;
        sum+=curr;
        if(map[sum-k]) count += map[sum-k];
        map[sum] = map[sum] + 1 || 1;
    }
    return count
};