class String_ans{
    constructor(){
        this.desicription = `This is the Class in JS Consist of all the answers in the String Questions.txt
        to check the working can use this methods or can check the code via github or by directly visiting this class
        methods : 
        Question1(String) -> uppercase to lowercse vise-a-versa
        Question2(Array, String) -> Counts no.of prefix in a word
        Question3(String) -> Captilzes starting and ending character of each word in a senctence
        Question4(String) -> Returns the frequency of all charaters in a word
        Question5(String, String) -> Checks if analogram or not
        Question6(String) -> From String array Need to find max. no.of words
        Question7(String) -> Sorts the sentence of each word according to Lexiogrphic order
        `
    }

    toString(){
        return this.desicription;
    }

    /**
     * @description converts a String upperCase to LowerCase and LowerCase to Uppercase charater-by-charater
     * @param {String value for converstion} text 
     * @returns newText has converted String 
     */
    Question1(text=''){
        if(text === "") return new Error("Must Provide Some Input String with Method Question1 !!");
        
        let newText = "";
        for(let idx in text){                   // done this same only -> (idx=0;idx < text.length; idx++)
            const charCode = text.charCodeAt(idx);
            if(64 < charCode  && charCode < 91){
                newText += String.fromCharCode(charCode + 32);
            }else if(96 < charCode && charCode < 123){
                newText += String.fromCharCode(charCode - 32);
            }else{
                throw new Error("Please sent String From A to Z or a to z");
            }
            
        }

        return newText;
    }

    /**
     * @description Checks numbers of prefix making pref and returns the count
     * @param {[contains No.of words]} arr
     * @param {contains prefix to be found} pref
     * @returns count of pref found in the words
     */
    Question2(arr = [], pref = ""){
        //Variables Validations
        pref = typeof pref === 'string' ? pref.trim() : false;
        
        if(!Array.isArray(arr) || arr.length === 0 || !pref || pref === "") {
            return new Error("Please enter a valid non-empty array and prefix string.");
        }

        //Sart
        let count = 0;

        /**
        @description My Complex Try
        @code
        for(let ditto of arr){
            const newArr = ditto.split(pref);

            if(newArr[0] === "") count++;
        }
        */

        //Normally
        for(let ditto of arr){
            let i =0;
            for(let idx in pref){
                if(pref[idx] !== ditto[idx]){
                    break;
                }else i++
            }

            if(i === pref.length) count++;
        }

        return count;
    }

    /**
     * @description Captilzes starting and ending character of each word in a senctence
     * @param {String_sentence} sentence 
     * @returns newSentence with starting and ending captial Letters in a sentence
     */
    Question3(sentence){
        //Parameter Validation
        if(!sentence) throw new Error("Plese Sent A valid String Input");

        //Actaul Code : 
        let words = sentence.split(" "), newSentence = [];

        for(let ditto of words){
            let word = "";
            if(ditto.length === 1) word = ditto.toUpperCase();
            else{
                word = ditto.slice(0, ditto.length - 1);

                word = word.replace(word[0], word[0].toUpperCase());
                word =word + ditto[ditto.length - 1].toUpperCase();
            }

            newSentence.push(word);
        }
        
        return newSentence.join(" ");
    }

    /**
     * @description Count the Frequnecy of Occuring in the word given
     * @param {String} input 
     * @returns {char : number} for each charater in a string
     */
    Question4(input){
        // Input Validation
        input = typeof input === 'string'? input.trim().toLowerCase() : false;
        if(!input){
            throw new Error("Please Enter a Valid String");
        }
        const freq = {};

        //Code
        while(input.length > 0){
            let char = input.charAt(0);
                
            let count = input.split(char).length - 1;

            freq[char] = count;
            
            input = input.replaceAll(char, "");
        }

        return freq; 
    }

    /**
     * @BestLogic Using BitMap
     * @description Count the Frequnecy of Occuring in the word given
     * @param {String} input 
     * @returns {char : number} for each charater in a string
     */
    Question4(input){
        // Input Validation
        input = typeof input === 'string'? input.trim().toLowerCase() : "";
        if(!input){
            throw new Error("Please Enter a Valid String");
        }

        //Delcarations
        const arr = new Array(26).fill(0); // Initial Values are zero(0) and size till a to z
        const freq = {};

        //Logic
        for(let i = 0; i < input.length; i++){
            let charidx = input.charCodeAt(i);
            
            arr[charidx - 97] = arr[charidx - 97] + 1;

        }

        for(let i =0; i< arr.length; i++){
            if(arr[i] > 0){
                freq[String.fromCharCode(i + 97)] = arr[i];
            }
        }

        return freq; 
    }

    /**
     * @description Checks if analogram or not
     * @param {String} word1 
     * @param {String} word2 
     * @returns Boolean value
     */
    Question5(word1, word2){
        // Input Validation
        word1 = typeof word1 === 'string'? word1.trim() : "";
        word2 = typeof word2 === 'string'? word2.trim() : "";

        if(!word1 || !word2) throw new Error("Please Enter Valid String");

        //Inital Declarations


        //Logic
        if(word1.length !== word2.length) return false;

        for(let char of word1){
            if(!word2.includes(char)) {
                return false;
                break;
            }
        }

        return true;
    }
    //Using BitMap
    Question5(word1, word2){
        // Input Validation
        word1 = typeof word1 === 'string'? word1.trim().toLowerCase() : "";
        word2 = typeof word2 === 'string'? word2.trim().toLowerCase() : "";

        if(!word1 || !word2) throw new Error("Please Enter Valid String");

        //Inital Declarations
        const arr = new Array(26).fill(0);
        
        //Logic
        if(word1.length !== word2.length) return false;

        for(let i=0; i< word1.length;i++){
            let charidx = word1.charCodeAt(i);
            arr[charidx - 97] = arr[charidx - 97] + 1;

            charidx = word2.charCodeAt(i);
            arr[charidx - 97] = arr[charidx - 97] - 1;
        }

        for(let i=0; i<arr.length; i++){
            if(arr[i] !== 0) return false;
        }

        return true;
    }

    /**
     * @description From String array Need to find max. no.of words
     * @param {string[]} sentences
     * @return {number}
     */
    Question6(sentences) {
        let max = sentences[0].split(" ").length;
        for(let i=1; i<sentences.length; i++){
            const current = sentences[i].split(" ").length;
            
            max = Math. max(current, max);
        }

        return max;
    };

    /**
     * @description Sorts the sentence of each word according to Lexiogrphic order
     * @param {String} input 
     * @returns The sorted String
     */
    Question7(input){
        // Input Validation
        input = typeof input === 'string'? input.trim() : "";

        if(!input) throw new Error("Please Enter a valid String");

        //Code
        let arr= input.split(" ");

        for(let i=0; i<arr.length-1; i++){
            for(let j=0; j<arr.length; j++){
                if(arr[j] > arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }

        return arr.join(" ");
    }
}

module.exports = String_ans;    