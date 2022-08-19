/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i][matrix[0].length-1] == target) return true
        if(matrix[i][matrix[0].length-1] < target) continue;
        if(matrix[i][0] > target) return false;
        let l = 0, r = matrix[0].length-1;
        while(l < r){
            let mid = Math.floor((l+r)/2);
            if(matrix[i][mid] == target) return true;
            if(matrix[i][mid] < target) l = mid+1;
            else r = mid-1
        }
        
        return matrix[i][l] === target
    }
    return false
};