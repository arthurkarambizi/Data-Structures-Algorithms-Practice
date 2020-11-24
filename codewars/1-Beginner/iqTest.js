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

/**
 * @param {string} s
 * @return {number}
 */
function iqTest(numbers) {
    const numbersArray = numbers.split(' ');
    const evenNumbersPosition = [];
    const oddNumbersPosition = [];

    for (let index = 0; index < numbersArray.length; index++) {
        const number = Number(numbersArray[index]);

        if (number % 2 === 0) {
            evenNumbersPosition.push(index + 1); // push even number position
        } else {
            oddNumbersPosition.push(index + 1); // push odd number position
        }
    }

    const output = evenNumbersPosition.length === 1 ? evenNumbersPosition[0] : oddNumbersPosition[0];
    return output;
}

const arrayOfNumbers = '2 4 7 8 10';

iqTest(arrayOfNumbers);
