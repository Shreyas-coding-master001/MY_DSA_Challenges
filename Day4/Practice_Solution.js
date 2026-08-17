/**
 * @link https://leetcode.com/problems/single-number/
 * @Complexity Time : O(n) Space : O(n/2 - 1) = O(n)
 * @param {array} array
 * @returns {Number} with single Frequency
 */
function Single_Frequency_Question(array){
    let set = new Set();

    for(let element of array){
        if(set.has(element)){
            set.delete(element);
        }else{
            set.add(element);
        }
    }

    const [ele] = set;
    return ele;
}
function best_solution(array){
    let ans = 0;

    for(let ele of array){
        ans ^= ele      //Perform xor Operation
    }

    return ans;
}

/**
 * @link https://leetcode.com/problems/jewels-and-stones/description/
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const set = new Set(jewels);
    let count=0;

    for(let char of stones){
        if(set.has(char)){
            count++;
        }
    }

    return count;
};

/**
 * @link https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let arr = new Array(26).fill(0);

    for(let idx in sentence){
        let char_code = sentence.charCodeAt(idx);

        arr[char_code - 97]++
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0){
            return false;
        }
    }

    return true;
};
var checkIfPangram = function(sentence) {
    let set = new Set();

    for(let char of sentence){
        set.add(char);
    }

    return set.size === 26? true : false;
};

/**
 * @link https://leetcode.com/problems/first-letter-to-appear-twice/
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let set = new Set();

    for(let ele of s){
        if(set.has(ele)) return ele;
        
        set.add(ele);
    }
};

/**
 * @link https://leetcode.com/problems/happy-number/description/
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    while(true){
        let num = n, sum=0;
        while(num > 0){
            rem = num%10;

            sum += rem**2;

            num= Math.floor(num/10);
        }

        if(sum === 1) return true;
        if(set.has(sum)) return false;
        set.add(sum);
        n = sum;
    }

    return false;
};

console.log(best_solution([2,1,3,4,1,2]));
module.exports = {Single_Frequency_Question, checkIfPangram, isHappy};