// function Question5(matrix){
//         let arr = new Array();
//         let i =0, j=0;
        
//         if(matrix.length === 1 ) {
//             return matrix[0];
//         }

//         let max_row = matrix.length - 1,
//         max_col = matrix[i].length - 1,
//         min_row = 0, min_col = 0

//         while(min_col <= max_col && min_row <= max_col){

//             if(j < max_col && i <= max_row){
//                 arr.push(matrix[i][j]);
//                 matrix[i][j] = null;
//                 j++;
//             }
//             else if(i < max_row && j === max_col){
//                 arr.push(matrix[i][j]);    
//                 matrix[i][j] = null;
//                 i++;
//             }
//             else if(j !== min_col){
//                 max_col--;
//                 min_row++;
//                 while(j !== min_col){
//                     arr.push(matrix[i][j]);
//                     matrix[i][j] = null;
//                     j--;
//                 }
//             }
//             else{ 
//                 if(i === max_row) max_row--;
//                 while(i - min_row){
//                     arr.push(matrix[i][j]);
//                     matrix[i][j] = null;
//                     i--;  
//                 }
//                 min_col++;
//             }

//             console.log(i, j, max_col, max_row);   
//         }
        
//         return arr;
// }

// console.log(Question5([[1,2,3],[4,5,6],[7,8,9]]))
// console.log(Question5([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,23,24]]))

heights = [160,150,170];
heights.sort().reverse();
console.log(heights);

