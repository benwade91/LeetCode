/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const res = [];
    let max = asteroids[0]
    for(let i = 0; i < asteroids.length; i++){
        let curr = asteroids[i]
        if(curr > 0) res.push(curr);
        else if(curr < 0 && !res.length) res.push(curr);
        else{
            while(res.length){
                if(res[res.length-1] < 0) {
                    res.push(curr);
                    break;
                }
                if(res[res.length-1] + curr > 0) break;
                if(res[res.length-1] + curr == 0){
                    res.pop();
                    break;
                }
                if(res[res.length-1] + curr < 0){
                    res.pop();
                }
                if(!res.length){
                    res.push(curr);
                    break;
                }
            }
        }
    }
    return res
};