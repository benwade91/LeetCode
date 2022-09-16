/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, x) {
    const powers = makePowersOfTwo(arr.length - 1);

    let i = 0;
    if (arr[i] === x) return i;
    for (let pI = powers.length - 1; pI >= 0; pI -= 1) { // iterate over powers backward
        const power = powers[pI];
        if (i + power < arr.length && x >= arr[i + power]) {
        i += power;
      
        if (arr[i] === x) return i;
        }
    }
    
    return -1;
    };

function makePowersOfTwo(lowerThan) { // -> array
  let result = []
  for(let i = 1; i <= lowerThan; i+=i) {
    result.push(i);
  }
  return result;

}