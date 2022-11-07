/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
//     keep count of each element occurence in map
    const map = {};
//     create results list
    const res = [];
//     iterate over nums and add count to map;
    for(let num of nums) map[num] = (map[num] ?? 0) + 1;

//     create currMaxEl value
    let currMaxEl = nums[0];
//     iterate over map for k largest values
    while(res.length < k){
        for(let key in map){
            if(map[key] > map[currMaxEl]) currMaxEl = key
        }
        res.push(currMaxEl)
        map[currMaxEl] = 0;
    }
    return res
};