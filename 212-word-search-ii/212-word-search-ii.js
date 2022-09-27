/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function(board, words) {
    let res = [];
    let trie = {};
    for(let word of words){
        let curr = trie
        for(let c of word){
            if(!curr[c]) curr[c] = {}
            curr = curr[c]
        }
        curr.end = word;
    }
    
    function dfs(r,c, node=trie){
        if(r < 0 || r >= board.length || c < 0 || c >= board[0].length) return;

        let char = board[r][c]
        let curr = node[char]
        if(!curr) return;
        if(curr.end){
            res.push(curr.end)
            curr.end = undefined
        }
        let directions = [[1,0],[-1,0],[0,1],[0,-1]]
        for(let [x,y] of directions){
            let temp = board[r][c]
            board[r][c] = null
            dfs(r+x, c+y, curr)
            board[r][c] = temp
        }
        
    }
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(trie[board[i][j]]) dfs(i,j)
        }
    }
    return res
};