/*
** Source : https://leetcode.com/problems/occurrences-after-bigram/
** Date   : 10-16-2019
*/

/*
** Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.
**
** For each such occurrence, add "third" to the answer, and return the answer.
**
** Example 1:
**
** Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
** Output: ["girl","student"]
** Example 2:
**
** Input: text = "we will we will rock you", first = "we", second = "will"
** Output: ["we","rock"]
**
** Note:
**
** 1 <= text.length <= 1000
** text consists of space separated words, where each word consists of lowercase English letters.
** 1 <= first.length, second.length <= 10
** first and second consist of lowercase English letters.
*/

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */

var findOcurrences = function(text, first, second) {
    let textArray = text.split(' ');
    let finalresults = [];
    for (let index = 0; index < textArray.length; index++) {
        const currentWord = textArray[index];
        let prevWord = textArray[index - 1];
        let nextWord = textArray[index + 1];
        if (prevWord === first && currentWord === second && nextWord) {
            finalresults.push(nextWord);
        }
    }
    return finalresults;
};

//--------------------------------------------------------------------------------
var findOcurrences = function(text, first, second) {
    let textArray = text.split(' ');
    let finalresults = textArray.map((currentWord, index) => {
        let prevWord = textArray[index - 1];
        let nextWord = textArray[index + 1];
        if (prevWord === first && currentWord === second) {
            return nextWord;
        }
    });
    let results = finalresults.filter(el => el);
    return results;
};

let text = 'alice is a good girl she is a good student';
let first = 'a';
let second = 'good';
findOcurrences(text, first, second);
