//                      **BitMap and Bitwise Operations**
const prompt = require("prompt-sync");

//Q] Implement a code to generate binary number from decimal numbers
function get_binary(num) {
    let binary = "";

    while(num > 0) {
        binary += (num % 2);         //binary = (num % 2) + binary;  -> for opposite direction
        num = Math.floor(num / 2);
    }

    return binary;      // 1 2 4 8 16
}

//Q] Implement a code to generate decimal number from binary number
function get_decimal(binary) {
    let decimal = null,
    count = 0;

    while(binary > 0) {
        decimal += (Math.pow(2,count) * (binary % 10));
        binary = Math.floor(binary / 10);
        count++;
    }

    return decimal;
}

/*
        Bitwise Operators 
1] &(AND) -> only true when both true : (1 & 1) = 1 otherwise false
2] |(OR) -> only false when both false : (0 | 0) = 0 otherwise true
3] ^(XOR) -> same bit's cancel out's : (0 ^ 0) = 0, (1 ^ 1) = 0 otherwise true (1 ^ 0) = 1
*/

/**
 *      Shift Operator
 * 1] >>(Right Shift Operator) -> Shift x(in our example x : 2) amount of bits in right : 15 >> 2 = 1111 -> 0111 -> 0011 = 3
 * 2] <<(left Shift Operator) -> Shift x(in our example x : 2) amount of bits in left : 15 << 2 = 1111 -> 11110 -> 111100 = 60
 * 3] ~(Unri operator) -> -(n + 1) : ~10 = -(10 + 1) = -11
 */

//Solve Practice_Questions.txt file 

/**
 * Practice : 
 * @desc Capgemini Question to Solve:
 * @link https://www.geeksforgeeks.org/quizzes/capgemini-pseudocode-quiz-questions/
*/

//Example to solve
// console.log(get_binary(25));
// console.log(get_decimal(11001));
