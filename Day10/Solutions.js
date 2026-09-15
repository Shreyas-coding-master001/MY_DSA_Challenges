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

module.exports = { printHello, printNumbers, naturalNumbers, sumUpToN };