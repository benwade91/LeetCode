var findWords = function(board, words) {
    const trie = {};
    
    // hydrate trie using our words array
    // ['a', 'b', 'as']
    // { a: { s: { word: 'as' }, word: 'a' }, b: { word: 'b' }}
    words.forEach((word) => {
        let node = trie;
        for (let letter of word) {
            if (!node[letter]) node[letter] = {};
            node = node[letter];
        }
        node.word = word;
    })
    for (let word of words) {
        let node = trie;
        for (let letter of word) {
            if (!node[letter]) node[letter] = {};
            node = node[letter];
        }
        node.word = word;
    }
    
    const backtrack = (row, col, node = trie) => {   
        if (row < 0 || row >= board.length || col < 0 || col >= board[row].length) return;
        
        const letter = board[row][col];
        if (!node[letter]) return;
        
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const current = node[letter];
        
        if (current.word) {
            matched.push(current.word);
            current.word = null;
        }
        
        for (let [x, y] of directions) {
            // check if you can go down current trie node path through any neighbors on the board
            let temp = board[row][col];
            board[row][col] = null;
            backtrack(row + x, col + y, current);
            board[row][col] = temp;
        }
    };
        
    const matched = [];
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const letter = board[row][col];
            if (trie[letter]) {
                backtrack(row, col);
            }
        }
    }
    
    return matched
}