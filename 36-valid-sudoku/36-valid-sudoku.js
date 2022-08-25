/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let badNums = new Set();
    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board.length; col++){
            if(board[row][col] == '.') continue;
            let rowCheck = `row: ${row} value: ${board[row][col]}`
            let colCheck = `col: ${col} value: ${board[row][col]}`
            let boxCheck = `box: [${Math.floor(row/3)},${Math.floor(col/3)}], value: ${board[row][col]}`
            
            if(badNums.has(rowCheck) || badNums.has(colCheck) || badNums.has(boxCheck)) return false;
            
            badNums.add(rowCheck)
            badNums.add(colCheck)
            badNums.add(boxCheck)
        }
    }
    return true;
};
