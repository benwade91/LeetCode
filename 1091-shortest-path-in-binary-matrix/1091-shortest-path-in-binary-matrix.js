/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(m) {
    const directions = [[1,1], [0,1], [1,0], [0,-1], [-1,-1], [-1,0], [-1,1], [1,-1]];
    if(m[0][0] == 1) return -1
    let queue = [[0,0,1]]
    while(queue.length){
        let [r, c, count] = queue.shift();
        if(r==m.length-1 && c == m[0].length-1) return count;
        m[r][c] = 1
        for(let [row, col] of directions){
            let x = r+row
            let y = c+col
            if(x < 0 || x > m.length-1 || 
               y < 0 || y > m[0].length-1 || 
               m[x][y] == 1) continue;
            else queue.push([x,y,count+1])
            m[x][y] = 1
        }
    }
    return -1
};