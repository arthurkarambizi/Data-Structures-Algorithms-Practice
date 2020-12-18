/*
 ** Source : https://www.codewars.com/kata/546e2562b03326a88e000020
 ** Date   : 12-18-2020
 */

/*
 ** Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
 **
 ** For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
 **
 ** Note: The function accepts an integer and returns an integer
 */

/**
 * @param {number} num
 * @return {number}
 */
function squareDigits(num) {
    const numString = String(num);
    let output = '';

    for (let index = 0; index < numString.length; index++) {
        const currentNumber = Number(numString[index]);
        output += currentNumber ** 2;
    }

    return Number(output);
}

squareDigits(9119); // 811181
