function Swap(a, b) {
    a = a ^ b
    b = a ^ b
    a = a ^ b

    return [a, b];
}

function checkEvenOrOdd(num) {
    // Write your logic here
    if((num&1) === 0) return "Even";

    return "Odd"
    
}

function checkBits(n, i) {
    n = n >> i;     // 101 => 001
    let num= n & 1;

    return num === 1? "set" : "Not set";
    // return num === 1? true : false;      //can also do this
}

function flipBit(n, i) {
    let num = (n >> i) & 1;

    n = n ^ 2**i;
    
    return n;
}

/**
 * Check whether a number is a power of two using bitwise operations.
 * @link https://leetcode.com/problems/power-of-two/
 * @question 231. Power of Two
 * @param {number} n - The input number
 * @return {boolean} - true if it is a power of two, false otherwise
 */
function isPowerOfTwo(n) {
    // Your code here
    let num = n & n-1

    if(n <= 0) return false;
    if(num === 0) return true;
    
    return false
}

//Example
console.log(Swap(2, 3));
console.log(checkEvenOrOdd(2));
console.log(checkBits(5, 2));
console.log(flipBit(5, 1));



