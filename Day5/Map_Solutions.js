//Personl Question
function GetFreqency(array){
    let map = new Map();

    for(let num of array){
        if(!map.has(num)) map.set(num, 1);
        else map.set(num, map.get(num) + 1);
    }

    return map;
    
}

/**
 * @link https://leetcode.com/problems/count-elements-with-maximum-frequency/description/
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map = new Map();
    let max = 0, count=0;

    for(let ele of nums){
        if(map.has(ele)) map.set(ele, map.get(ele) + 1);
        else map.set(ele, 1);
    }

    for(let value of map.values()){
        if(value === max) count += value;
        else if(value > max){
            max = value;
            count = value;
        }
    }

    return count;
};

/**
 * @link https://leetcode.com/problems/two-sum/
 * @Complexity Time : O(n) Space : O(n);
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i< nums.length; i++){
        if(map.has(nums[i])) return [i, map.get(nums[i])];
        
        let ans = target - nums[i];
        
        map.set(ans, i);
        
    }

    return [];
};

/**
 * @link https://leetcode.com/problems/sum-of-unique-elements/description/
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = new Map();

    //Get's all frequency of Elements in Map
    for(let ele of nums){
        map.set(ele, (map.get(ele) || 0) + 1);
    }

    let sum=0;
    for(let key of map.keys()){
        if(map.get(key) === 1) sum += key;
    }

    return sum;
};

/**
 * @link https://leetcode.com/problems/sort-the-people/description/
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    for(let i=0; i< heights.length; i++){
        for(let j=i; j< heights.length; j++){
            if(heights[j] > heights[i]){
                let temp = heights[i];
                heights[i] = heights[j];
                heights[j] = temp;

                temp = names[i];
                names[i] = names[j];
                names[j] = temp;
            }
        }
    }

    return names;
    
};
//Best one
var sortPeople = function(names, heights) {
    let map = new Map();

    for(let i=0; i< heights.length; i++){
        map.set(heights[i], names[i]);
    }
    heights.sort((a,b) => b-a);

    for(let i=0; i<heights.length; i++){
        names[i] = map.get(heights[i]);
    }

    return names;
    
};



module.exports = {GetFreqency, twoSum, sortPeople};