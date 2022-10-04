/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function(arr) {
    let max = ['0','0'];
    let maxFound = false;
    
    const perm = (nums, index) => {
        if(index === 4)check([...nums])
        for(let i = index; i < nums.length; i++){
            [nums[i], nums[index]] = [nums[index], nums[i]]
            perm(nums, index+1);
            [nums[i], nums[index]] = [nums[index], nums[i]]
        }
    }
    
    const check = (nums) => {
        let currMax = [Number(max[0]), Number(max[1])]
        let currHour = (nums[0] * 10) + nums[1]
        let currMin = (nums[2]*10)+ nums[3]
        if(currHour < 24 && currMin < 60){
            if(currHour > currMax[0] || (currHour >= currMax[0] && currMin >= currMax[1])){
                max = [`${nums[0]}${nums[1]}`,`${nums[2]}${nums[3]}`]
                maxFound = true
            }
        }
    }
    
    perm(arr, 0)
    return maxFound ? `${max[0]}:${max[1]}` : ""
};