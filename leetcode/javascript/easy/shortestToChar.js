/*
** Source : https://leetcode.com/problems/shortest-distance-to-a-character/
** Date   : 10-16-2019
*/

/*
** Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.
**
** Example 1:
**
** Input: S = "loveleetcode", C = 'e'
** Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
**
** Note:
**
** S string length is in [1, 10000].
** C is a single character, and guaranteed to be in string S.
** All letters in S and C are lowercase.
*/

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */

//======================================================================================================
//1. Check if letter in S is ( stringLetter === C) push 0 in results array
//2. else divide string (S) in two parts previousString and  nextString
// example : loveleetcode on index 2 previousString = lov , nextString = veleetcode
// - reverse previousString to find the closest C to stringLetter at index 2, previousString = vol
// previousFindCharacter = -1 if C = e ,no e found in previousString
// - find the closest C to stringLetter at index 2, nextString = veleetcode nextFindCharacter = 1
// - push the smallest number in results array if both (previousFindCharacter and nextFindCharacter > -1)
// - else push the number which is greater than -1
//======================================================================================================

var shortestToChar = function(S, C) {
    let results = [];
    for (let index = 0; index < S.length; index++) {
        const stringLetter = S[index];
        if (C === stringLetter) {
            results.push(0);
        } else {
            let previousString = S.substring(0, index + 1)
                .split('')
                .reverse()
                .join('');
            let nextString = S.substring(index);
            let previousFindCharacter = [...previousString].findIndex(el => el === C);
            let nextFindCharacter = [...nextString].findIndex(el => el === C);

            if (previousFindCharacter > -1 && nextFindCharacter > -1) {
                let res = previousFindCharacter <= nextFindCharacter ? previousFindCharacter : nextFindCharacter;
                results.push(res);
            } else {
                let res = previousFindCharacter === -1 ? nextFindCharacter : previousFindCharacter;
                results.push(res);
            }
        }
    }
    return results;
};

let S = 'loveleetcode',
    C = 'e';
shortestToChar(S, C);
