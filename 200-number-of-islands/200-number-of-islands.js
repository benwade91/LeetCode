/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visited = new Set();
    let count = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(visited.has(`${i}, ${j}`)) continue
            if(!visited.has(`${i}, ${j}`) && grid[i][j] == '1'){
                count++;
                checkIsland(i, j)
            }
        }
    }
    
    function checkIsland(x, y){
        if(visited.has(`${x}, ${y}`)) return;
        if(x > grid.length-1 || x < 0) return;
        if(y > grid[0].length-1 || y < 0) return;
        visited.add(`${x}, ${y}`);
        if(grid[x][y]=='1'){
        checkIsland(x-1, y)
        checkIsland(x+1, y)
        checkIsland(x, y-1)
        checkIsland(x, y+1)
            
        }
    }
    return count 
};