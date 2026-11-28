/**
 * 1492. The kth Factor of n
 * @link https://leetcode.com/problems/the-kth-factor-of-n/description/
 * @param {number} n
 * @param {number} k
 * @return {number}
*/

var kthFactor = function(n, k) {
    let count = 0;
    for(let i=0; i<=n; i++){
        if(n%i === 0) {
            count++;
            if(count === k) return i;
        }
        // if(count === k) return i;   //It will take less time then nested loop
    }
    return -1;
};