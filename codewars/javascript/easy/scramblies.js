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
    /*
     **     str1: 'katas',  str2: 'steak'
     **     str1Object : { k: 1, a: 2, t: 1, s: 1 }
     **     str2Object : { s: 1, t: 1, e: 1, a: 1, k: 1 }
     **     e is not in str1Object output = false
     */

    const str1Object = createStringObject(str1);
    const str2Object = createStringObject(str2);
    let output = true;

    for (const letter in str2Object) {
        if (str2Object[letter] > str1Object[letter] || !(letter in str1Object)) {
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
function createStringObject(string) {
    const stringObject = {};
    for (let index = 0; index < string.length; index++) {
        const letter = string[index];

        if (letter in stringObject) {
            stringObject[letter] += 1;
        } else {
            stringObject[letter] = 1;
        }
    }

    return stringObject;
}

// scramble('rkqodlw', 'world'); // true
// scramble('cedewaraaossoqqyt', 'codewars'); //true
scramble('katas', 'steak'); //false
// scramble('scriptjava', 'javascript'); //true
// scramble('scriptingjava', 'javascript'); //    true
// scramble('scriptsjava', 'javascripts'); //   true
// scramble('jscripts', 'javascript'); //false
// scramble('aabbcamaomsccdd', 'commas'); //   true
