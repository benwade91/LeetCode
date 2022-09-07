/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let splitPath = path.split('/')
    let res = [];
    for(let b of splitPath){
        if(b=='' || b=='.') continue;
        if(b=='..') res.pop();
        else res.push(b)
    }
    
    return '/' + res.join('/')
};