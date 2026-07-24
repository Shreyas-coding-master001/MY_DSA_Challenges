const prompt = require('prompt-sync')();
const {  maxNumberOfBalloons  } = require("./module");
const String_ans = require("./Day1/String_ans");
const {countAsterisks, Solution} = require("./String_Assignment/Answer.js");

/*
const obj = new String_ans();
const arr = ["abc", "def", "hij", "xyz", "abcdefgh"];

let input = prompt("Enter a Input: ");
// let input1 = prompt("Enter a Input: ");

console.log(obj.Question7(input));
*/

const obj = new Solution();

// console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));
// console.log(obj.percentageLetter("mississippi", "s"));
// console.log(obj.checkString("aaabbb"));
// console.log(obj.trongPasswordCheckerII("Aa1!Aa1!"));
// let letter = obj.greatestLetter("AbCdEfGhIjK");
// if(!letter){
//     console.log("Nothing Found");
// }else{
//     console.log(letter);
// }
// console.log(obj.checkDistances("ababcdcd", [1, 1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0,0]));

// console.log(obj.largestGoodInteger("222"));
// console.log(obj.digitCount("13011"));

console.log(obj.removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]));
console.log(obj.removeAnagrams(["a", "b", "c", "d", "e"]));



/*
//LeetCode
const n = parseInt(prompt("Enter size of array : "));
const arr = new Array(n);

for(let i = 0; i < n; i++) arr[i] = Number(prompt());

console.log(maxNumberOfBalloons("leetcode"));
*/