/*
 ** Source : https://www.codewars.com/kata/552c028c030765286c00007d
 ** Date   : 11-24-2020
 */

/*
 ** Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
 **
 ** ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
 **
 ** ##Examples :
 **
 ** iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
 **
 ** iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
 */

const findOutlier = require('./findOutlier.js');

/**
 * @param {string} numbers
 * @return {number}
 */
function iqTest(numbers) {
    //  use check object
    //  return the even integer if the odd count is greater than one
    //  return the odd integer if the even count is greater than one

    const numbersArray = numbers.split(' ');
    const check = { even: { count: 0, position: 0 }, odd: { count: 0, position: 0 } };
    let output = null;

    for (let index = 0; index < numbersArray.length; index++) {
        const number = Number(numbersArray[index]);

        if (number % 2 === 0) {
            check.even.count++;
            check.even.position = index + 1;
        } else {
            check.odd.count++;
            check.odd.position = index + 1;
        }

        if (check.even.count === 1 && check.odd.count > 1) output = check.even.position;
        if (check.odd.count === 1 && check.even.count > 1) output = check.odd.position;
        if (output) break;
    }

    return output;
}

iqTest('2 4 3 8 10'); // 3
findOutlier('2 4 3 8 10'.split(' ')); //3
