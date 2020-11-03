/*
** Source : https://leetcode.com/problems/unique-morse-code-words/
** Date   : 11-01-2020
*/

/*
** International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
**
** For convenience, the full table for the 26 letters of the English alphabet is given below:
**
** [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
** Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.
**
** Return the number of different transformations among all words we have.
**
** Example:
** Input: words = ["gin", "zen", "gig", "msg"]
** Output: 2
** Explanation:
** The transformation of each word is:
** "gin" -> "--...-."
** "zen" -> "--...-."
** "gig" -> "--...--."
** "msg" -> "--...--."
**
** There are 2 different transformations, "--...-." and "--...--.".
** Note:
**
** The length of words will be at most 100.
** Each words[i] will have length in range [1, 12].
** words[i] will only consist of lowercase letters.
**
*/
/**
 * @param {string[]} words
 * @return {number}
 */

var uniqueMorseRepresentations = function(words) {
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let morseCode =[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    let finalArr =[];
    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        let wordSplitted = word.split('');
        let morseCodeArray=[]
        for (let index = 0; index < wordSplitted.length; index++) {
            const subWord = wordSplitted[index];
            let alphabetIndex = alphabets.findIndex(el =>el === subWord);
            morseCodeArray.push(morseCode[alphabetIndex])
        }
        let morseCodeWord = morseCodeArray.join('')
        finalArr.push(morseCodeWord);
    }
    let noDuplicates = [... new Set(finalArr)]
    return noDuplicates.length;
};

//--------------------------------------------------------------------------------
var uniqueMorseRepresentations = function(words) {
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let morseCode =[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    let finalArr = words.map(word => {
        let wordSplitted = word.split('');
        let morseCodeArray = wordSplitted.map(subWord => {
            let alphabetIndex = alphabets.findIndex(el => el === subWord);
            return morseCode[alphabetIndex];
        });
        return morseCodeArray.join('')
    });

    let noDuplicates = [... new Set(finalArr)]
    return noDuplicates.length;
};

let words = ['gin', 'zen', 'gig', 'msg'];

uniqueMorseRepresentations(words);
