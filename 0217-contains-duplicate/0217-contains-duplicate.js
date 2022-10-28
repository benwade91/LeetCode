/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    for(let n of nums){
        if(!map[n]) map[n] = 1;
        else return true
    }
    return false;
};