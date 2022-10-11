/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 
 [4,5,0,-2,-3,1]  5
 
  res = [2,0,1,0,4,0]
  sum = 5
  count = 7
  
 */
var subarraysDivByK = function(nums, k) {
    let res = new Array(k).fill(0)
    res[0] = 1;
    let sum = 0;
    let count = 0;
    for(let num of nums){
        sum += num
        let rem = sum % k;
        rem = rem < 0 ? rem+k : rem;
        count += res[rem];
        res[rem]++
    }
    return count 
};