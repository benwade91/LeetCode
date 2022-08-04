/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = {};
    for(let i = 0; i < numbers.length; i++){
        let remainder = target - numbers[i];
        if(map[remainder] !== undefined) return [map[remainder]+1, i+1]
        if(!map[numbers[i]]) map[numbers[i]] = i;
    }
};