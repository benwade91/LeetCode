/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s
    let table = Array(numRows).fill("")
    let dir = false;
    let row = 0;
    for(let c of s){
        table[row] += c;
        if(row == 0 || row == numRows-1) dir = !dir;
        row += dir ? 1 : -1;
    }
    return table.join("")
};