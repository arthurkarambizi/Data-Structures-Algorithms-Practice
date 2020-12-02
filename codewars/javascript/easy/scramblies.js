/*
 ** Source : https://www.codewars.com/kata/55c04b4cc56a697bb0000048
 ** Date   : 12-1-2020
 */

/*
 ** Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
 **
 ** Notes:
 **
 ** Only lower case letters will be used (a-z). No punctuation or digits will be included.
 ** Performance needs to be considered
 ** Input strings s1 and s2 are null terminated.
 ** Examples
 ** scramble('rkqodlw', 'world') ==> True
 ** scramble('cedewaraaossoqqyt', 'codewars') ==> True
 ** scramble('katas', 'steak') ==> False
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
function scramble(str1, str2) {
    const str1LettersObject = createLettersObject(str1);
    const str2LettersObject = createLettersObject(str2);

    let output = true;

    for (const letter in str2LettersObject) {
        if (str2LettersObject[letter] <= str1LettersObject[letter]) {
            output = true;
        } else {
            output = false;
            break;
        }
    }

    return output;
}

/**
 * @param {string} string
 * @return {Object} ex: {a:1, b:2, c:3}
 */
function createLettersObject(string) {
    const lettersObject = {};
    for (let index = 0; index < string.length; index++) {
        const letter = string[index];

        if (!lettersObject[letter]) {
            lettersObject[letter] = 1;
        } else {
            lettersObject[letter] += 1;
        }
    }

    return lettersObject;
}

scramble('rkqodlw', 'world'); // true
scramble('cedewaraaossoqqyt', 'codewars'); //true
scramble('katas', 'steak'); //false
scramble('scriptjava', 'javascript'); //true
scramble('scriptingjava', 'javascript'); //    true
scramble('scriptsjava', 'javascripts'); //   true
scramble('jscripts', 'javascript'); //false
scramble('aabbcamaomsccdd', 'commas'); //   true
