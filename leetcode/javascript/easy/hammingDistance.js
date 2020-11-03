/*
** Source : https://leetcode.com/problems/flipping-an-image/
** Date   : 10-16-2019
*/

/*
** The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
**
** Given two integers x and y, calculate the Hamming distance.
**
** Note:
** 0 ≤ x, y < 231.
**
** Example:
**
** Input: x = 1, y = 4
**
** Output: 2
**
** Explanation:
** 1   (0 0 0 1)
** 4   (0 1 0 0)
**        ↑   ↑
**
** The above arrows point to positions where the corresponding bits are different.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function(x, y) {
    let xBinary = binaryConvert(x);
    let yBinary = binaryConvert(y);
    let theBiggestNumber = xBinary >= yBinary ? xBinary : yBinary;
    let results = 0;
    for (let index = 0; index <= theBiggestNumber.length; index++) {
        const xElement = xBinary[index];
        const yElement = yBinary[index];
        if (xElement !== yElement) {
            results += 1;
        }
    }
    return results;
};

const binaryConvert = number => {
    binaryStr = number.toString(2);
    while (binaryStr.length < 32 || binaryStr.length % 32 !== 0) {
        binaryStr = '0' + binaryStr;
    }
    return binaryStr;
};

// let x = 680142203,
//     y = 1111953568;

let x = 99999,
    y = 7777;

// let x = 329808,
//     y = 1184615797;
hammingDistance(x, y);
