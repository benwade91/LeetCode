/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    let res = [];
    for(const num of nums) map[num] = map[num] + 1 || 1;
    for(const key in map) res.push(key)
    res.sort((a,b)=>map[b]-map[a])
    res.length = k;
    return res
};