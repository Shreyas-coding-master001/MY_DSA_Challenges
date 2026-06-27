const prompt = require('prompt-sync')();
const {  maxNumberOfBalloons  } = require("./module");
const String_ans = require("./Day1/String_ans");

const obj = new String_ans();
const arr = ["abc", "def", "hij", "xyz", "abcdefgh"];

let input = prompt("Enter a Input: ");
// let input1 = prompt("Enter a Input: ");

console.log(obj.Question7(input));



// const n = parseInt(prompt("Enter size of array : "));
// const arr = new Array(n);

// for(let i = 0; i < n; i++) arr[i] = Number(prompt());

// console.log(maxNumberOfBalloons("leetcode"));