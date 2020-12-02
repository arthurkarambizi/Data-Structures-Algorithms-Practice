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

function solution(roman) {
    const numbers = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
	};
	let currentNumber = roman;
	let output = '';

    let results = Object.keys(numbers).find((element) => Number(element) >= 2000);
    // console.log(results);
}

solution('IV');
