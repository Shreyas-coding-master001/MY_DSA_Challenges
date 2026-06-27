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




module.exports = { maxNumberOfBalloons };