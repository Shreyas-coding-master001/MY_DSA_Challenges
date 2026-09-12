class Solution {
    decodeMessage(mapping, message) {
        // Implement your solution here
        const map = new Map();
        for(let ditto of Object.keys(mapping)){
            map.set(ditto, mapping[ditto]);
        }

        let decodedMessage = '';
        for(let mes of message){
            if(!map.get(mes)) {
                decodedMessage += mes;
                continue;
            }
            decodedMessage += map.get(mes);
        }

        return decodedMessage;
    }

    //Time Complexity : O(n) + O(n) * O(k) = O(n * k)
    distributeCandies(n, k, candies) {
        // Implement logic here
        const map = new Map();

        for(let i=0; i< candies.length; i++){
            map.set(candies[i], (map.get(candies[i]) || 0) + 1);
        }

        let distributeCandy = 0;
        while(map.size >= k){
            let i=0;
            for(let key of map.keys()){         
                if(i >= k) break; 
                map.set(key, map.get(key) - 1);
                
                console.log(map);
                
                if(map.get(key) === 0) map.delete(key);
                i++;
            }
            distributeCandy++;
        }

        return distributeCandy;
    }

    kthDistinct(arr, k) {
        // Implement your code here
        let map = new Map();
        for(let i=0; i< arr.length; i++){
            map.set(arr[i], (map.get(arr[i]) || 0) + 1);
        }

        let count = 0;
        for(let key of map.keys()){
            let value = map.get(key);
            
            if(value === 1) count++;

            if(count === k) return key;
        }

        return "None";
    }

    //LeedCode : https://leetcode.com/problems/word-pattern/description/
    wordPattern(pattern, s) {
        // Implement your code here
        let map =  new Map();
        let map2 = new Map();
        const words = s.split(" ");
        const letters = pattern.split("");

        if(letters.length !== words.length) return false;

        for(let i=0; i< words.length; i++){
            if(!map2.get(words[i])) map2.set(words[i], letters[i]);
            else if(map2.get(words[i]) !== letters[i]) return false;

            if(!map.get(letters[i])) map.set(letters[i], words[i]);
            else if(map.get(letters[i]) !== words[i]) return false;
        }

        return true;
    }

    //LeetCode : https://leetcode.com/problems/set-mismatch/
    findErrorNums(nums) {
        // Implement your code here
        let map = new Map(),
        arr = new Array(2),
        count = 1;

        for(let i=0; i< nums.length; i++){
            if(map.has(nums[i])) arr[1] = nums[i];

            map.set(nums[i], nums[i]);
        }

        for(let i=0; i < nums.length; i++){
            if(!map.has(count)) {
                arr[0] = count;
                break;
            } 
            count++;  
        }

        return arr;
    }
}

module.exports = Solution;
