class Multi_D{
    constructor(){
        this.description = `This is the LeedCode Questions I solved for Multi Dimensions Array.\n Questions can bw found on Day3/Multi_D_Quesion.txt`   
    }

    /**
     * @link https://leetcode.com/problems/matrix-diagonal-sum/description/
     * @Complexty Time : O(n) Space : O(1)
     * @param {array} mat 
     * @returns {Number}
     */
    Question1(mat){
        let sum = 0;
        for(let i=0; i<mat.length; i++){
            if(i === (mat.length-1)/2){
                sum += mat[i][i];
                continue;    
            }

            sum += mat[i][i];
            sum += mat[i][mat.length - 1- i];
        }

        return sum;
    }

    /**
     * @link https://leetcode.com/problems/transpose-matrix/description/
     * @Complexity Time : O(n^2) Space : O(n * m)
     * @param {array} mat 
     * @returns {array}
     */
    Question2(matrix){
        let newMat = [];
        for(let i=0; i<matrix[0].length; i++){
            let arr = new Array();
            for(let j=0; j<matrix.length; j++){
                arr.push(matrix[j][i]);
            }

            newMat.push(arr);
        }

        return newMat;
    }

    /**
     * @link https://leetcode.com/problems/flipping-an-image/
     * @Complexity Time : O(n^2) Space : O(1)
     * @param {array} image 
     * @returns {array}
     */
    Question3(image){
        for(let i=0; i< image.length; i++){
            for(let j=0; j < Math.ceil(image[i].length/2); j++){

                let temp = image[i][j];
                image[i][j] = image[i][image[i].length - 1 - j];
                image[i][image[i].length - 1 - j] = temp;

                if(j===image[i].length -1 -j) {
                    image[i][j] = image[i][j] === 1? 0 : 1;
                    continue;
                }
                image[i][j] = image[i][j] === 1? 0 : 1;
                image[i][image[i].length - 1 - j] = image[i][image[i].length - 1 - j] === 1? 0 : 1;
            }
            
        }

        return image;
    }
    //Better Runtime for this
    Question3(image){
        for(let arr of image){
            let i = 0, j=arr.length-1;
            while(i <= j){
                let temp = 1-arr[i];
                arr[i] = 1-arr[j];
                arr[j] = temp;

                i++;
                j--;
            }
        }

        return image;
    }

    /**
     * @link https://leetcode.com/problems/rotate-image/
     * @Complexity Time : O() Space : O()
     * @param {array} matrix 
     * @returns {array}
     */
    Question4(matrix){
        let newMat = matrix.map(arr => [...arr]);
        for(let i=0; i< matrix.length; i++){
            let col = matrix.length-1-i;
            for(let j=0; j< matrix.length; j++){
                matrix[j][col] = newMat[i][j];
            }
        }        

        return matrix;
    }
    //Can also do using transpose and then flip;

    /**
     * @link https://leetcode.com/problems/spiral-matrix/description/
     * @param {array} matrix 
     * @returns {array} with spail shape elements
     */
    Question5(matrix){
        let arr = new Array();
        let i =0, j=0,
        max_col = matrix[0].length -1, max_row = matrix.length - 1,
        min_col = 0, min_row = 0;
        
        if(matrix.length === 1 ) {
            return matrix[0];
        }else if(matrix[0].length === 1){
            for(let array of matrix) arr.push(array[0]);

            return arr;
        }

        while( max_row >= min_row && matrix[i][j] !== null){
           while(j < max_col && matrix[i][j] !== null){
                arr.push(matrix[i][j]);
                matrix[i][j] = null;
                j++;
                if(j === min_col) min_row++;
           }

           while(i < max_row && matrix[i][j] !== null){
                arr.push(matrix[i][j]);
                matrix[i][j] = null;
                i++;
                if(i === min_row) max_col--;
           }
    
           while((j > min_col && matrix[i][j] !== null)){
                arr.push(matrix[i][j]);
                matrix[i][j] = null;
                j--;
                if(j === max_col) max_row--;
           }

           while(i-1 > min_row && matrix[i][j] !== null){
                arr.push(matrix[i][j]);
                matrix[i][j] = null;
                i--;
                if(i === max_col) min_col++;
           }
        }

        
        return arr;
    }

    /**
     * @link https://leetcode.com/problems/set-matrix-zeroes/submissions/2105761304/
     * @Complexity Time : O((m+n)^2) Space : O(1)
     * @param {array} matrix 
     * @returns {array} changes zeros to all rows and columns
     */
    Question6(matrix){
        let zero_matrix = [];

        for(let i=0; i<matrix.length; i++){
            for(let j=0; j< matrix[0].length; j++){
                if(matrix[i][j] === 0){
                    let arr = new Array(2);
                    arr[0]= i;
                    arr[1]= j;

                    zero_matrix.push(arr)
                }
            }
        }
        

        for(let k=0; k< zero_matrix.length; k++){
            let i=zero_matrix[k][0];
            for(let j=0;j<matrix[0].length; j++){
                matrix[i][j] = 0;
            }

            i=zero_matrix[k][1];
            for(let j=0;j<matrix.length; j++){
                matrix[j][i] = 0;
            }
            
        }
        
        return matrix;
    }
}

module.exports = Multi_D;