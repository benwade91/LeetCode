/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 
 [4,5,0,-2,-3,1]  5
  map = {
  0:1
  4:1
  9:2
  7:1
  4:1
  5:1
  1:1
  };
  sum = ;
  let count = 0;
 */
var subarraysDivByK = function(nums, k) {
    let arr = new Array(k).fill(0);
    arr[0] = 1;
    let sum = 0;
    let count = 0;
    for(let num of nums){
        sum += num;
        let rem = sum % k;
        rem = rem < 0 ? rem + k : rem;
        count += arr[rem];
        arr[rem]++
    }
    return count
};