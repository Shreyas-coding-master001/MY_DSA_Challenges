// Just Tell the Time and Space Complexity of each Questions
//link : https://www.geeksforgeeks.org/dsa/practice-questions-time-complexity-analysis/

//Question 1 : 
var a = 0, b = 0;
for (i = 0; i < N; i++) {
    a = a + Math.random();
}
for (j = 0; j < M; j++) {
    b = b + Math.random();
}
/**
 * @Answers
 * @Time : O(N + M)
 * @Space : O(1)  -> Constant space as a and b are only allocated
 */

//Question 2 : 
var a = 0;
for (i = 0; i < N; i++) {
    for (j = N; j > i; j--) {
        a = a + i + j;
    }
}
/**
 * @Answers
 * @Time : O(N * N) 
 * @Space : O(1)
 */

//Question 3 : 
let i=0, j=0, k = 0;
for (i = Math.floor(n / 2); i <= n; i++) {
    for (j = 2; j <= n; j = j * 2) {
        k = k + Math.floor(n / 2);
    }
}
/**
 * @Answers
 * @Time : O(n/2 * logn) = O(nlogn) 
 * @Space : O(1)  -> Constant space as a ans b are only allocated
 */
