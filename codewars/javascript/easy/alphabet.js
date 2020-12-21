/*
 ** Source : https://www.codewars.com/kata/546f922b54af40e1e90001da
 ** Date   : 11-24-2020
 */

/*
 ** In this kata you are required to, given a string, replace every letter with its position in the alphabet.
 **
 ** If anything in the text isn't a letter, ignore it and don't return it.
 **
 ** "a" = 1, "b" = 2, etc.
 **
 ** Example
 ** alphabetPosition("The sunset sets at twelve o' clock.")
 ** Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
 */

/**
 * @param {string} text
 * @return {string}
 */
function alphabetPosition(text) {
    const stringLowerCase = text.toLowerCase();
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsPositions = {}; // ex: {a:1, b:2, c: 3, d: 4,....,z: 26}

    let output = '';

    // create alphabetsPositions
    for (let index = 0; index < alphabets.length; index++) {
        const letter = alphabets[index];
        alphabetsPositions[letter] = index + 1;
    }

    for (let index = 0; index < stringLowerCase.length; index++) {
        const currentLetter = stringLowerCase[index];
        // if it's an alphabet add position to the output
        if (currentLetter in alphabetsPositions) {
            output += ` ${alphabetsPositions[currentLetter]}`;
        }
    }

    return output.trim();
}

alphabetPosition(`The sunset sets at twelve o' clock.`); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
