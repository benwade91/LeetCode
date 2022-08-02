/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let clean = s.toLowerCase().split('').filter(a=> a.match(/[a-z0-9]/))
    return clean.join('') === clean.reverse().join('')
};