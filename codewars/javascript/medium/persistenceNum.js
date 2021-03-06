/*
 ** Source : https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
 ** Date   : 12-17-2020
 */

/*
 ** Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
 **
 ** For example:
 **
 **  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
 **                        // and 4 has only one digit
 **
 **  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
 **                         // 1*2*6 = 12, and finally 1*2 = 2
 **
 **  persistence(4) === 0 // because 4 is already a one-digit number
 */

/**
 * @param {number} num
 * @return {number}
 */
function calculateProduct(num) {
    const numString = String(num);
    let product = 1;

    for (let index = 0; index < numString.length; index++) {
        const currentNumber = Number(numString[index]);

        product *= currentNumber;
    }

    return product;
}

/**
 * @param {number} num
 * @return {number}
 */
function persistence(num) {
    if (num < 10) return 0;

    let currentNumber = num;
    let currentProduct = null;
    let count = 0;

    while (currentNumber > 10) {
        currentProduct = calculateProduct(currentNumber);
        count += 1; // count times currentProduct was calculated
        currentNumber = currentProduct;
    }

    return count;
}

persistence(39); // 3
persistence(4); // 0
persistence(999); // 4
