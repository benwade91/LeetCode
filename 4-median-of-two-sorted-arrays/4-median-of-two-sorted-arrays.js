/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2];
    arr.sort((a,b)=> a-b);
    if(arr.length % 2 == 1) return arr[Math.floor( arr.length / 2)]
    else {
        let mid = Math.floor(arr.length / 2)
        return (arr[mid] + arr[mid-1]) / 2
    }
};