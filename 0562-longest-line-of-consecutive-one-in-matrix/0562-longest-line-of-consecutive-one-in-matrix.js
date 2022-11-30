/**
 * @param {number[][]} mat
 * @return {number}
 
 [[1,1,0,0,1,0,0,1,1,0],
  [1,0,0,1,0,1,1,1,1,1],
  [1,1,1,0,0,1,1,1,1,0],
  [0,1,1,1,0,1,1,1,1,1],
  [0,0,1,1,1,1,1,1,1,0],
  [1,1,1,1,1,1,0,1,1,1],
  [0,1,1,1,1,1,1,0,0,1],
  [1,1,1,1,1,0,0,1,1,1],
  [0,1,0,1,1,0,1,1,1,1],
  [1,1,1,0,1,0,1,1,1,1]]
 */
var longestLine = function(mat) {
    let r = mat.length, 
        c = mat[0].length, 
        res = 0;
    const directions = [[1,0], [0,1], [1,1], [1, -1]]
    
    for(let i = 0; i < r; i++){
        for(let j = 0; j < c; j++){
            if(mat[i][j] == 0) continue;
            for(let d of directions) helper(i,j,d,0)
            mat[i][j] = 0;
        }
    }
    
    return res;
    
    function helper(x,y, dir, count) {
        if(x == r || x < 0 || y == c || y < 0 || !mat[x][y]){
            res = Math.max(count, res)
            return;
        }
        helper(x + dir[0], y + dir[1], dir, count+1)
    }
};