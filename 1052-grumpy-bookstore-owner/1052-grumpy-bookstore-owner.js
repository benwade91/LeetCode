/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let satisfied = 0;
    let grumpyTrick = 0;
    for(let i = 0; i < customers.length; i++){
        let grump = grumpy[i];
        if(!grump){
            satisfied += customers[i]
            customers[i] = i == 0 ? 0 : customers[i-1]
            continue;
        }
        
        if(i > 0) customers[i] += customers[i-1]

        let potentialSatisfied = i >= minutes ? customers[i]-customers[i-minutes] : customers[i];

        grumpyTrick = Math.max(grumpyTrick, potentialSatisfied)
    }

    return satisfied + grumpyTrick;
};