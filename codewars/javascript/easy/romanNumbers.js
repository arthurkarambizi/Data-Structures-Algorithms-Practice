/*
 ** Source : https://www.codewars.com/kata/51b6249c4612257ac0000005
 ** Date   : 11-30-2020
 */

/*
 ** Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
 **
 ** Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
 **
 ** Example:
 **
 ** solution('XXI'); // should return 21
 ** Help:
 **
 ** Symbol    Value
 ** I          1
 ** V          5
 ** X          10
 ** L          50
 ** C          100
 ** D          500
 ** M          1,000
 */

/**
 * @param {string} roman
 * @return {number}
 */
function solution(roman) {
    const numbers = { I: 1, IV: 4, V: 5, IX: 9, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let output = 0;

    const lastTwoLetters = roman.slice(roman.length - 2);

    // check last 2 letters if its 4 or 9
    if (numbers[lastTwoLetters]) {
        output += numbers[lastTwoLetters];
    } else {
        output += calculate(lastTwoLetters, numbers);
    }

    if (roman.length > 2) {
        const otherLetters = roman.slice(0, roman.length - 2);
        output += calculate(otherLetters, numbers);
    }

    return output;
}

/**
 * @param {string} romanLetters
 * @param {Object} numbers
 * @return {number}
 */
function calculate(romanLetters, numbers) {
    let results = 0;
    for (let index = 0; index < romanLetters.length; index++) {
        const letter = romanLetters[index];
        results += numbers[letter];
    }

    return results;
}

solution('XC');
