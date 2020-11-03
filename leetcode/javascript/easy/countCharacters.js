/*
** Source : https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
** Date   : 10-16-2019
*/

/*
** You are given an array of strings words and a string chars.
**
** A string is good if it can be formed by characters from chars (each character can only be used once).
**
** Return the sum of lengths of all good strings in words.
**
**
**
** Example 1:
**
** Input: words = ["cat","bt","hat","tree"], chars = "atach"
** Output: 6
** Explanation:
** The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
** Example 2:
**
** Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
** Output: 10
** Explanation:
** The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
**
**
** Note:
**
** 1 <= words.length <= 1000
** 1 <= words[i].length, chars.length <= 100
** All strings contain lowercase English letters only.
*/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

var countCharacters = function(words, chars) {
    let finalArr = [];
    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        let charsCopyArray = [...chars];
        let checkWord = true;

        for (let index = 0; index < word.length; index++) {
            const subword = word[index];
            let findwordIndex = charsCopyArray.findIndex(char => char === subword);

            if (findwordIndex !== -1) {
                charsCopyArray.splice(findwordIndex, 1);
                checkWord = true;
            } else {
                checkWord = false;
                break;
            }
        }

        if (checkWord) {
            finalArr.push(word);
        }
    }

    return finalArr.join('').length
};

//--------------------------------------------------------------------------------

var countCharacters = function(words, chars) {
    let substringChecker = (word, charsArray) => {
        let result = true;

        for (let index = 0; index < word.length; index++) {
            const subword = word[index];
            let findwordIndex = charsArray.findIndex(char => char === subword);

            if (findwordIndex !== -1) {
                charsArray.splice(findwordIndex, 1); //remove the found word in chars array to avoid duplicates in word
                result = true; // if a subword is found in chars keep results true
            } else {
                result = false; // if a subword is not found in chars return false
                break;
            }
        }
        return result;
    };

    let finalArr = words.filter(word => {
        let charsCopyArray = [...chars];//for each word check
        return substringChecker(word, charsCopyArray);
    });

    return finalArr.join('').length;
};

let words = ['cat', 'bt', 'hat', 'tree'],
    chars = 'atach';

countCharacters(words, chars);