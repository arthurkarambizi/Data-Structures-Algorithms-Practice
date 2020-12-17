/*
 ** Source : https://www.codewars.com/kata/54da5a58ea159efa38000836
 ** Date   : 12-16-2020
 */

/*
 ** Given an array of integers, find the one that appears an odd number of times.
 **
 ** There will always be only one integer that appears an odd number of times.
 */

/**
 * @param {array} A
 * @return {number}
 */
function findOdd(A) {
    const countObject = {};
    let output = null;

    for (let index = 0; index < A.length; index++) {
        const number = A[index];

        if (number in countObject) {
            countObject[number] += 1;
        } else {
            countObject[number] = 1;
        }
    }

    for (const number in countObject) {
        if (countObject[number] % 2 === 1) {
            output = Number(number);
            break;
        }
    }

    return output;
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // 5
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]); // -1
findOdd([10]); // 10
findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]); // 1
