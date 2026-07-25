// helper.js (template)
function countAsterisks(s) {
  // Write your logic here
    let count = 0;
    let i =0;

    while(i < s.length){
        let char = s.charAt(i)
        if(char === "*"){
            count++;
        }else if(char === "|"){
            char = s.charAt(++i);
            while(char !== "|" && i < s.length){
                i++;
                char = s.charAt(i);
            }
        }

        i++;
    }

  return count;
}

// All Easy Queations to solve for practice
class Solution {
  /**
   * @param {string} s
   * @param {string} letter
   * @returns {number}
   * @link https://leetcode.com/problems/percentage-of-letter-in-string/description/
   */
    percentageLetter(s, letter) {
    // Write your code here
    let count = s.split(letter).length - 1;

    let percent = Math.floor((count * 100)/s.length)

    return percent;
    }

    /**
     * @param {string} s
     * @returns {boolean}
     * @link https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/description/
     */
    checkString(s) {
        // Write your code here
        let occured = false;
        
        for(let idx=0; idx < s.length; idx++){
            if(occured){
                if(s[idx] === "a") return false;
            }
            else if(s[idx] === "b") occured = true;
        }

        return true;
    }

    /**
     * 
     * @param {string} password 
     * @returns {boolean}
     * @link https://leetcode.com/problems/strong-password-checker-ii/description/
     */
    trongPasswordCheckerII(password) {
    // Write your logic here
        let lowercase= false, uppercase=false, specailcase= false, digit= false;
        let lastChar = null;

        if(password.length < 8) return false;

        for(let i =0; i< password.length; i++){
            let ascii = password.charCodeAt(i);

            if(password[i] === lastChar) return false;

            if(ascii > 64 && ascii < 91)  uppercase=true;
            else if(ascii > 96 && ascii < 123) lowercase=true;
            else if(ascii > 47 && ascii < 58) digit = true;
            else {
                specailcase = true;
            };

            lastChar = password[i];
        }

        if(lowercase && uppercase && specailcase && digit) return true;
        
        return false;
    }

    /**
     * @param {String} s 
     * @returns {String} charater with greatest upper and lower case
     * @link https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/
     */
    //At Sheryians - LeetCode Usspe hi chalega
    greatestLetter(s) {
        // Write your logic here
        s = s.split("").sort().join("")
        let lower = s[s.length - 1];
        let upper = s[0];
        let i=0, j =  s.length - 1;
        while(lower !== upper.toLowerCase() && i < s.length){
            console.log(upper, lower);
            let char_code = s.charCodeAt(++i)
            if( char_code > 64 && char_code < 91){
                upper = s[i];
            }else{   
                lower = s[--j];
            }
        }
        
        

        if(upper.charCodeAt(0) >= 65 && upper.charCodeAt(0) <= 90 ) 
            return upper;
            
            
        return ""; // return empty string if none found
    }

    greatestLetter(s) {
        // Write your logic here
        s = s.split("").sort().join("");
        let letter = null;
        
        for(let i = 0; i< s.length; i++){
            if(s.charCodeAt(i) > 90){
                break;
            }

            for(let j = s.length - 1; j > i; j--){
                if(s.charCodeAt(j) < 91) {
                    break;
                }

                if(s[j] === s[i].toLowerCase()){
                    if(s[i] > letter || !letter){
                        letter = s[i];
                    }
                    break;
                }
            } 
        }
        
        if(letter) return letter;

        return ""; // return empty string if none found
    }

    checkDistances(s, distance) {
        // Write your code here
        for(let i = 0; i< s.length; i++){
            let char_code = s.charCodeAt(i);
            let space = distance[char_code - 97];
            
            if(s[i] !== s[i + space + 1]){
                return false;
            }else{
                distance[char_code - 97] = -1;
            }

        }        

        return true;
    }

    /**
     * 
     * @param {String} num 
     * @returns {String} of repeated absolute string
     * @link https://leetcode.com/problems/largest-3-same-digit-number-in-string/description/
     */
    largestGoodInteger(num) {
        // Write your code here
        let str = "";
        for(let i = 0; i< num.length - 1; i++){
            if(num[i] === num[i+1] && num[i+1] === num[i+2]){
                if(str < num[i]) str = num.slice(i, i+3);       
            }
            
        }

        return str;
    }

    /**
     * 
     * @param {String} number 
     * @param {String} digit charater of a number
     * @returns {String}
     * @link https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/description/
     */
    removeDigit(number, digit) {
    // Write your code here
        for(let i = number.length ; i>= 0; i--){
            if(number[i] === digit){
                number = number.slice(0,i) +number.slice(i+1,);
                break;
            }
        }
     return number;
    }

    /**
     * @param {string} num
     * @return {boolean}
     * @link https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/description/
     */
    digitCount(num) {
        // Write your code here
        let digits = new Array(10).fill(0);

        for(let i =0; i< num.length; i++){
            let digit = Number(num[i]);
            let ocurences = Number(num[digit]);

            if(digits[digit] === 0){
                digits[digit] = ocurences - 1;
            }else{
                digits[digit] -= 1;
            }
        }

        for(let i =0; i< digits.length; i++){
            if(digits[i] !== 0) {
                return false;
            }
        }

        return true;

    }

    /**
     * @param {string[]} words
     * @return {string[]}
     */
    removeAnagrams(words) {
        // Write your code here
        let i=0

        while(i< words.length - 1){
            if(words[i].length !== words[i+1].length){
                i++;
            }
            else if(words[i].split("").sort().join("") === words[i+1].split("").sort().join("")){
                words.splice(i+1, 1);
            }else{
                i++;
            }
        }
        return words;
    }

    /**
     * @param {String} s 
     * @param {Number} k 
     * @returns {String}
     * @link https://leetcode.com/problems/calculate-digit-sum-of-a-string/description/
     */
    digitSum(s, k) {
        // Write your code here
        let sum =0, count = 0;
        let j=0;
        while(s.length > k){
            if(j%k === 0 && j!== 0){
                
                s = s.replace(s.substring(j- k -count, j - count) ,""+sum);
                if(Math.floor(sum%10) === 0){
                    count += k-1;
                }else{
                    count += k-2;
                }
                
                sum = 0;
            }
            
            if(s.length - (j - count) <= 0){
                s.replace(s.substring(j-k-count+1, j-count), ""+sum);
                j=0;
                count = 0;
                sum=0
            }

            let num = Number(s[Math.abs(j - count)]);
            sum += num;
            j++;            
        }

        // return s;
    }

    digitSum(s, k) {
    // Keep repeating until the string is short enough
    while (s.length > k) {
        let newString = "";
        
        // Loop through the string in chunks of size k
        for (let i = 0; i < s.length; i += k) {
            let chunk = s.slice(i, i + k); // Get the group of k characters
            let sum = 0;
            
            // Sum up the digits in this specific chunk
            for (let char of chunk) {
                sum += Number(char);
            }
            
                newString += sum; // Append group sum to the new round
            }
            
            s = newString; // Replace original string with our new sum string
        }
        
        return s;
    }

    /**
     * @param {string sentences} s 
     * @returns {boolean}
     * @link https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
     */
    areNumbersAscending(s) {
        // Write your code here
        s = s.split(" ");
        let last_digit = null;
        for(let i=0; i< s.length; i++){
            // if(s[i].length > 1) continue;  #As numbers can also be of any size 60 700 9000 etc

            let char_code = s[i].charCodeAt(0);
            
            if(char_code >= 48 && char_code <= 57){
                let digit = Number(s[i]);
                if(digit <= last_digit) return false;
                else last_digit = digit;
            }
        }

        return true;
    }

    /**
     * @param {string} word
     * @param {string} ch
     * @return {string}
     * @link https://leetcode.com/problems/reverse-prefix-of-word/description/
     */
    reversePrefix(word, ch) {
        // Write your code here
        let reverseword = "";
        let i=0;
        while(i< word.length){
            reverseword = word.substring(i, i+1) + reverseword;

            if(word[i] === ch){
                reverseword += word.substring(i+1,);
                break;
            }

            i++;
        }

        if(i === word.length) return word 

        return reverseword;
    }
}
    

module.exports = { countAsterisks, Solution };
