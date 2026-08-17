/**
 * @link https://leetcode.com/problems/single-number-iii/
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let ans = 0;

    for(let ele of nums) ans ^= ele;

    let num, ele;

    for(ele of nums){
        num = ans ^ ele;

        if(nums.includes(num)){
            
            break;
        }
    }

    return [ele, num];
};
var singleNumber = function(nums) {
    let set = new Set();

    for(let ele of nums){
        if(set.has(ele)) set.delete(ele);
        else set.add(ele);
    }

    const [ele1,ele2] = set;
    return [ele1, ele2];
};


export default singleNumber;