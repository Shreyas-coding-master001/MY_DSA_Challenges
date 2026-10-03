/**
 * @link https://leetcode.com/problems/find-greatest-common-divisor-of-array/
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    //Normal Method
    let max = nums[0], min = nums[0];
    for(let i=0; i< nums.length; i++){
        if(max < nums[i]) max = nums[i];
        if(min > nums[i]) min = nums[i];
    }

    if(min === max) return min;

    let GCD = null;
    for(let i=1; i< max; i++) {
        if(max%i !== 0 || min%i !== 0) continue;
        GCD = i;
    }

    return GCD;
};

var findGCD = function(nums) {
    if(nums.length > 2) {
        let max = nums[0], min = nums[0];
        for(let i=0; i< nums.length; i++) {
            if(nums[i] > max) max = nums[i];
            if(nums[i] < min) min = nums[i];
        }
        nums = [min, max];
    }

    if(nums[0] === 0) return nums[1];

    let temp = nums[0];
    nums[0] = nums[1]%nums[0];
    nums[1] = temp;

    return getGCDRecursion(nums);
};

/**
 * Using Recursion finding GCD
 * @param {NUmber} smaller lower value
 * @param {Number} greater higher value
 * @param {Number} count set lower value only at count
 * @returns {Number} GCD value for two numbers
 */
function getGCDRecursion(smaller, greater, count) {
    if(greater%count === 0 && smaller%count === 0) return count;

    return getGCDRecursion(smaller, greater, count-1);
}

function GCDEucliden(a, b) {
    if(a === 0) return b;

    return GCDEucliden(a, b%a);
}

/**
 * 204. Count Primes
 * @link https://leetcode.com/problems/count-primes/
 * @param {number} n
 * @return {number}
 * this won't work used [new Uint8Array(n)] as it will give memory limit exceeded for large 10^6
 * but logic is correct and will work for smaller values of n
 */
var countPrimes = function(n) {
    let arr = new Array(n).fill(true),
    newArr = new Array();

    for(let i=2; i <= Math.sqrt(n); i++) { 
        if(!arr[i]) continue;

        for(let j=i*i; j< n; j+=i) {
            arr[j] = false;
        }
    }


    for(let i=2; i< n; i++) { 
        if(arr[i]) newArr.push(i);
    }

    return newArr.length;
};

console.log(countPrimes(0));