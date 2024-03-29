/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0;
    let l = 0, r = height.length-1;
    
    while(l<r){
        const w = r-l
        const h = Math.min(height[r], height[l])
        const currArea = w*h;
        area = Math.max(currArea, area);
        if(height[l] > height[r]) r--
        else l++
    }
    return area;
};