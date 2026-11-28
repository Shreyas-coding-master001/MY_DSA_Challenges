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

/**
 * 69. Sqrt(x)
 * @param {number} x
 * @link https://leetcode.com/problems/sqrtx/description/
 * @return {number}
 */
var mySqrt = function(x) {
    mid = Math.floor(x/2);
    return getSqrt(mid,mid, x);
};
//Correctly runs but the Time and Memory is to long
function getSqrt(i, x) {
    if(i*i === x) {
        return i;
    }
    else if(i*i> x){
        return i-1;
    } 

    return getSqrt(i+1,x);
}

//Use binary search logic for best result but will not work with recurrsion then
var mySqrt2 = function(n) {
    // Write your code here
    let first= 1, last = Math.floor(n/2), ans= 0;
    while(first < last) {
        let mid = first + Math.floor(last - first/2),
        q = Math.floor(n/mid);

        if(mid === q){
            return mid;
        }else if(mid < q){
            ans= mid;
            first = mid+1;
        }else {
            last = mid -1;
        }
    }

    return ans;
}

/**
 * 50. Pow(x, n)
 * @link https://leetcode.com/problems/powx-n/description/
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n===0) return 1;

    // ans = getPow(1, n, Math.abs(x), x);
    ans = getPowBetter(x,Math.abs(n));

    if(n<0) ans = 1/ans;

    return ans;
};
/**
 * My Solutions
 * Time : O(log(n)) 
 * Working : x=2, n=10, 
 * 2x2 -> 4x4 -> 16x16 -> if() 2x2 -> 256x4 = return 1024
 * i=2 -> 4 -> 8 -> if() 2 -> 8+2 = return 10
 */
function getPow(i ,n, ans, x){ 
    i = i+i;

    if(i > n) {
        i = i/2;
        i= n-i;

        if(i > 0) ans = ans * getPow(1, i, x, x) 

        return ans;
    }

    return getPow(i, n, ans*ans, x);
}

//This is best for Space Complexity
function getPowBetter(x, n){ 
    if(n == 0) return 1;
    let ans = getPowBetter(x, Math.floor(n/2));

    if(n%2 == 0) return ans*ans;

    return ans*ans*x;
}

console.log(myPow(2.1, 3));

