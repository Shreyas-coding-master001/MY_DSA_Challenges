//It Constis of Lastest Question's Solution of LeetCode That I Solve

/**
 * @description MY logic 10ms -> bad
 * @link https://leetcode.com/problems/maximum-number-of-balloons/description/
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const find = ["b", "a", "l", "l", "o", "o", "n"];
    let count = 0, i=0;

    while(text.includes(find[i])){

        text = text.replace(find[i], "");

        if(i === find.length - 1){
            i = 0;
            count++;
        }else{
            i++;
        }
    }

    return count;
};

//Best Logic : 
var maxNumberOfBalloons = function(text) {
    const count = (char) => text.split(char).length - 1;

    return Math.min(
        count("b"),
        count("a"),
        count("n"),
        Math.floor(count("l")/2),
        Math.floor(count("o")/2)
    );
}; 

/**
 * @leedCode https://leetcode.com/problems/unique-3-digit-even-numbers/?envType=daily-question&envId=2026-09-11
 * @probelm 3483. Unique 3-Digit Even Numbers
 * @param {array-of-numbers} digits 
 * @returns {number}
 */
var totalNumbers = function(digits) {
    let set =  new Set();

    for(let i=0; i<digits.length; i++) {
        //Improve Time : if(digits[i] === 0) continue;
        for(let j=0; j< digits.length; j++) {
            //Improve Time :  if(i === j) continue;
            for(let k=0; k< digits.length; k++) {
                if(i===j || j===k || i==k || digits[i] === 0) continue; // Improve : if(j===k || i==k) continue;

                const digit = digits[i] + "" + digits[j] + "" + digits[k];
                
                if(digits[k] % 2 ===0) set.add(digit);
            }   
        }
    }
    
    return set.size;
};


console.log(totalNumbers([0, 2, 2]));


module.exports = { maxNumberOfBalloons };