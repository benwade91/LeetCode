/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(m) {
    const directions = [[1,1], [0,1], [1,0], [0,-1], [-1,-1], [-1,0], [-1,1], [1,-1]];
    
    let queue = [[0,0,1]]
    while(queue.length){
        let [r, c, count] = queue.shift();
        if(r < 0 || r > m.length-1 || c > m[0].length-1 || c < 0 || m[r][c] == 1) continue;
        if(r==m.length-1 && c == m[0].length-1 && m[r][c] == 0) return count;
        m[r][c] = 1
        for(let [row, col] of directions){
            queue.push([r+row, c+col, count+1])
        }
    }
    return -1
};