/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s
    let table = Array(numRows).fill().map(()=>Array().fill())
    let x = 0, y = 0, dir = 0;
    for(let c of s){
        table[x][y] = c;
        if(dir){
            if(x < table.length-1)x++
            else{
                x--;
                y++;
                dir = 0
            }
        }else{
            if(x > 0){
                x--
                y++
            }else{
                x++
                dir = 1
            }
        }
    }
    return table.flat().join("")
};