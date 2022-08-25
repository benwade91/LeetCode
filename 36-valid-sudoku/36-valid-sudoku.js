/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const squareIndices = [[0,0], [0,3], [0,6],
                          [3,0], [3,3], [3,6],
                          [6,0], [6,3], [6,6],]
    
    for(let i of squareIndices){
        const [a,b] = i;
        if(!checkBox(a,b)) return false;
    }
    
    for(let i = 0; i < board.length; i++){
        if(!checkRow(i)) return false
        if(!checkCol(i)) return false
    }
    
    return true
    
    function checkRow(x){
        let set = new Set();
        for(let i = 0; i < board.length; i++){
            if(board[x][i] == '.') continue;
            if(set.has(board[x][i])) return false;
            set.add(board[x][i])
        }
        return true
    }
    
    function checkCol(y){
        let set = new Set();
        for(let i = 0; i < board.length; i++){
            if(board[i][y] == '.') continue;
            if(set.has(board[i][y])) return false;
            set.add(board[i][y])
        }
        return true
    }
    
    function checkBox(x,y){
        let set = new Set();
        for(let i = x; i < x+3; i++){
            for(let j = y; j<y+3; j++){
                
                if(x==0 && y == 3) console.log(i,j)
                
                if(board[i][j] == '.')continue;
                
                
                
                if(set.has(board[i][j])) return false;
                set.add(board[i][j])
            }
        }
 
        return true;
    }
};
