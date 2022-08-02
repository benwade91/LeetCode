/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = [];
    let map = {};
    for(const word of strs){
        const sortedWord = word.split('').sort().join('');
        map[sortedWord] = [...(map[sortedWord] ?? []), word]
    }
    for(const word in map) res.push([...map[word]])
    return res
};