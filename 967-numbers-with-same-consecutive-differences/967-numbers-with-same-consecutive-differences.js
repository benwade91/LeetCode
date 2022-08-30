/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let res = new Set();
    const helper = (N, num)=>{
        if(N == 1) res.add(num)
        else{
            let last = num % 10;
            if(last+k<10){
                helper(N-1, num*10+last+k)
            }
            if(last-k>=0){
                helper(N-1, num*10+last-k)
            }
        }
    }
    for(let i = 1; i < 10; i++)helper(n, i)
    return [...res]
};