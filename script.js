const prompt = require('prompt-sync')();
const {  maxNumberOfBalloons  } = require("./module");
const String_ans = require("./Day1/String_ans");
const {countAsterisks, Solution} = require("./String_Assignment/Answer.js");
const Multi_D = require("./Day3/Solution.js")
const {GetFreqency, twoSum, sortPeople} = require("./Day5/Map_Solutions.js");

const obj = new Multi_D();

const mat = [2,7,11,15];

names = ["A","B","C","D"]
heights = [100,200,50,150]

// console.log(GetFreqency(mat));
// console.log(twoSum(mat, 9));
console.log(sortPeople(names, heights));

// console.log(obj.Question1(mat));
// console.log(obj.Question2(mat));
// console.log(obj.Question3(mat));
// console.log(obj.Question4(mat));
// console.log(obj.Question5(mat));
// console.log(obj.Question6(mat));


/*
const obj = new String_ans();
const arr = ["abc", "def", "hij", "xyz", "abcdefgh"];

let input = prompt("Enter a Input: ");
// let input1 = prompt("Enter a Input: ");

console.log(obj.Question7(input));
*/


/* Day 1
const obj = new Solution();
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));
console.log(obj.percentageLetter("mississippi", "s"));
console.log(obj.checkString("aaabbb"));
console.log(obj.trongPasswordCheckerII("Aa1!Aa1!"));
let letter = obj.greatestLetter("AbCdEfGhIjK");
if(!letter){
    console.log("Nothing Found");
}else{
    console.log(letter);
}
console.log(obj.checkDistances("ababcdcd", [1, 1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0,0]));

console.log(obj.largestGoodInteger("222"));
console.log(obj.digitCount("13011"));

console.log(obj.removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]));
console.log(obj.removeAnagrams(["a", "b", "c", "d", "e"]));

console.log(obj.digitSum("11111222223", 3));
console.log(obj.areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"));
console.log(obj.reversePrefix("xyxzxe", "e"));
*/



/*
//LeetCode
const n = parseInt(prompt("Enter size of array : "));
const arr = new Array(n);

for(let i = 0; i < n; i++) arr[i] = Number(prompt());

console.log(maxNumberOfBalloons("leetcode"));
*/