/**
 * Print "Hello" exactly n times using recursion.
 * @param {number} n - Number of times to print
 */
function printHello(n) {
    // Your code here
    if(n <= 0) return;

    console.log("Hello");

    printHello(--n);
}

/**
 * Recursively prints natural numbers from 1 to n, separated by a space.
 * @param {number} n
 */
function printNumbers(n) {
   //Write your code here
    if(n <= 0) return;
    
    printNumbers(n - 1);

    process.stdout.write(n + " ");
}

/**
 * Recursively prints natural numbers from n to 1, separated by a space.
 * @param {number} n
 */
function naturalNumbers(n) {
   //Write your code here
    if(n <= 0) return;

    process.stdout.write(n + " ");

    naturalNumbers(n-1);
}

/**
 * Recursive function to calculate sum up to N
 * @param {number} n
 * @returns {number}
 */
function sumUpToN(n) {
    // Write your logic here
    if(n <= 1) return n;

    return n + sumUpToN(--n);
}

/**
 * Print Fibonacci series up to n terms using recursion
 * @param {number} n
 * @returns {void}
 */
function Fibonacci(n, first, second) {
    if(n===2) return;

    let third = first + second;

    process.stdout.write(third + " ");

    Fibonacci(n-1, second, third);
}

function printFibonacci(n) {
    // Write your logic here
    process.stdout.write(0 + " " + 1 + " ");
    Fibonacci(n, 0, 1);
}

function nthFibonacciTerm(n) {
    // Write your logic here
    if(n===1 || n===0)  {
        return n;
    }
    let value = printFibonacci(n-1) + printFibonacci(n-2);
    return value;
}

function sumofDigits(n, sum) {
    if(String(n).length === 1) return sum + n;
    const rem = n % 10;
    n = Math.floor(n/10);
    sum += rem;
    return sumofDigits(n, sum);
}

function sumofDigits(n) {
    if(String(n).length === 1) return n;
    const value =  (n % 10) + sumofDigits(Math.floor(n/10));
    return value;
}

/**
 * Recursive function to calculate factorial of a number
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    // Write your code here
    if(n===1) return 1;

    return n * factorial(n-1);
}

/**
 * Print the reverse of the digits of the given number
 * @param {number} n
 */
function reverseDigits(n) {
    // Write your logic here
    if(String(Math.abs(n)).length === 1) return (n);
    const rem = n%10;
    let power = 10 ** (String(Math.abs(n)).length - 1);
    if(n < 0) 
        return (rem*power) + reverseDigits(Math.ceil(n/10));
    else
        return (rem*power) + reverseDigits(Math.floor(n/10));
}

module.exports = { printHello, printNumbers, naturalNumbers, sumUpToN, factorial, reverseDigits };