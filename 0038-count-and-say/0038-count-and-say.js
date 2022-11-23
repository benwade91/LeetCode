/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let count = 1;
    let str = '1';
    while(count < n){
        let substr = "";
        let idx = 0;
        while (idx < str.length) {
            let amount = 0;
            const num = str[idx];
            while (str[idx] === num) {
                amount++;
                idx++;
            }
            substr += amount + num
        }
        str = substr;
        count++
    }
    return str;
};