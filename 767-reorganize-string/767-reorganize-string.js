/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let map = {}
    for(let char of s) map[char] = map[char] + 1 || 1;
    
    let sorted = Object.keys(map).sort((a,b)=> map[b] - map[a])
    let res = [], 
        index = 0;
    
    if(map[sorted[0]] > Math.ceil(s.length / 2)) return "";
       
    for(let i = 0; i < sorted.length; i++){
        let curr = map[sorted[i]];
        for(let j = 0; j < curr; j++){
            if(index >= s.length) index = 1;
            res[index] = sorted[i];
            index += 2;
        }
    }
    return res.join('');
};