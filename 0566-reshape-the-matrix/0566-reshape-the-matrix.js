/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if(mat.length * mat[0].length !== r*c) return mat;
    let m = mat.flat();
    let i = 0;
    let res = Array(r).fill().map(()=> Array(c))
    for(let row = 0; row < r; row++){
        for(let col = 0; col < c; col++){
            res[row][col] = m[i];
            i++
        }
    }
    return res
};