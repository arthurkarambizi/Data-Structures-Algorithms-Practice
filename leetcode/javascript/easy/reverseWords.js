/*
** Source : https://leetcode.com/problems/reverse-words-in-a-string-iii/
** Date   : 10-16-2019
*/

/*
** Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
**
** Example 1:
** Input: "Let's take LeetCode contest"
** Output: "s'teL ekat edoCteeL tsetnoc"
** Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

/**
 * @param {string} s
 * @return {string}
 */

//TODO:
// reversedString: reverse every word in s
// results :reverse reversedString

var reverseWords = function(s) {
    let reversedString = [];
    for (let index = s.length - 1; index >= 0; index--) {
        const letter = s[index];
        reversedString.push(letter);
    }

    reversedString = reversedString.join('').split(' ');

    let results = [];
    for (let index = reversedString.length - 1; index >= 0; index--) {
        const letter = reversedString[index];
        results.push(letter);
    }
    results = results.join(' ');
    return results;
};

//--------------------------------------------------------------------------------
var reverseWords = function(s) {
    let stringArray = s.split('');
    let stringReversed = stringArray
        .reverse()
        .join('')
        .split(' ');
    let results = stringReversed.reverse().join(' ');
    return results;
};

//--------------------------------------------------------------------------------
var reverseWords = function(s) {
    let stringArray = s.split(' ');
    let results = stringArray.map(string => {
        let stringReversed = [...string].reverse();
        return stringReversed.join('');
    });
    return results.join(' ')
};

let s = "Let's take LeetCode contest";
reverseWords(s);
