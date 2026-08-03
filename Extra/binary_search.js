/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @link https://leetcode.com/problems/binary-search/description/
 */
export var search = function(nums, target) {
    let first = 0,
    last= nums.length - 1;

    while(first <= last){
        let mid = Math.floor(first + (last - first )/ 2);

        if(nums[mid] === target) return mid;
        else if(nums[mid] > target) last = mid - 1;
        else first = mid + 1;
    }  

    return -1;
};