/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let freq = {}, mostFreq = 0, count = 0; 
    
    for(let c of tasks) freq[c] = freq[c] + 1 || 1;
    for(let c in freq) mostFreq = Math.max(mostFreq, freq[c]);
    for(let c in freq) if(freq[c] === mostFreq) count++;
    
    return Math.max(tasks.length, (mostFreq - 1) * (n + 1) + count);
};