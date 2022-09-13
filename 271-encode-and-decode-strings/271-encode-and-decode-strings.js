/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    for(let i in strs){
        let word = strs[i].split('');
        for(let char in word) word[char] = String.fromCharCode(word[char].charCodeAt(0)+1)
        strs[i] = word.join('');
    }
 
    return strs
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
        for(let i in s){
        let word = s[i].split('');
        for(let char in word) word[char] = String.fromCharCode(word[char].charCodeAt(0)-1)
        s[i] = word.join('');
    }
    return s
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */