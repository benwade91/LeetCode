/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    let edges = {};
    let minCuts = wall.length;
    for(let row of wall){
        let edge = 0;
        for(let i = 0; i < row.length-1; i++){
            edge += row[i]
            edges[edge] = (edges[edge] ?? 0) + 1;
        }
    }
    for(let edge in edges) minCuts = Math.min(wall.length - edges[edge], minCuts);
    return minCuts;
};