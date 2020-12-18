/*
 ** Source : https://www.codewars.com/kata/56f2d43fe40b70a442000f26
 ** Date   : 12-12-2020
 */

/*
 ** Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.
 **
 ** All the arguments except the last will be arrays, the last argument is n.
 **
 ** nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
 */

/**
 * @return {number}
 */
function nthSmallest() {
    const [numbersArray, nthSmallest] = [...arguments];
    const numbersArrayMerged = [].concat(...numbersArray);

    numbersArrayMerged.sort((a, b) => a - b);

    return numbersArrayMerged[nthSmallest - 1];
}

nthSmallest([2, 4, 6, 8, 10, 12], 4);
nthSmallest([1, 5], [2], [4, 8, 9], 4);
