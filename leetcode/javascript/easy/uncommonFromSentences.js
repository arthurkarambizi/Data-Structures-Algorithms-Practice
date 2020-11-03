/*
** Source : https://leetcode.com/problems/uncommon-words-from-two-sentences/
** Date   : 11-01-2020
*/

/*
** We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)
**
** A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
**
** Return a list of all uncommon words.
**
** You may return the list in any order.
**
** Example 1:
**
** Input: A = "this apple is sweet", B = "this apple is sour"
** Output: ["sweet","sour"]
** Example 2:
**
** Input: A = "apple apple", B = "banana"
** Output: ["banana"]
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */

var uncommonFromSentences = function(A, B) {
    let joinStrings = [...A.split(' '), ...B.split(' ')].sort();

    let results = joinStrings.filter((subString, index) => {
        let prevSubString = joinStrings[index - 1];
        let nextSubString = joinStrings[index + 1];
        if (subString !== prevSubString && subString !== nextSubString) {
            return subString;
        }
    });

    return results;
};

//--------------------------------------------------------------------------------
var uncommonFromSentences = function(A, B) {
    let joinStrings = [...A.split(' '), ...B.split(' ')].sort();
    let results = [];
    for (let index = 0; index < joinStrings.length; index++) {
        const subString = joinStrings[index];
        let prevSubString = joinStrings[index - 1];
        let nextSubString = joinStrings[index + 1];
        if (subString !== prevSubString && subString !== nextSubString && subString) {
            results.push(subString);
        }
    }
    return results;
};

// let A = 'this apple is sweet',
//     B = 'this apple is sour';
let A = ' apple apple',
    B = 'banana';
uncommonFromSentences(A, B);
