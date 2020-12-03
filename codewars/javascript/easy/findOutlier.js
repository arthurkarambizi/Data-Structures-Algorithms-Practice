/*
 ** Source : https://www.codewars.com/kata/5526fc09a1bbd946250002dc
 ** Date   : 11-24-2020
 */

/*
 ** You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
 **
 ** Examples
 ** [2, 4, 0, 100, 4, 11, 2602, 36]
 ** Should return: 11 (the only odd number)
 **
 ** [160, 3, 1719, 19, 11, 13, -21]
 ** Should return: 160 (the only even number)
 */

/**
 * @param {number[]} integers
 * @return {number}
 */
function findOutlier(integers) {
    //  return the first element of an array that has only 1 element
    const evenArray = integers.filter((integer) => integer % 2 === 0);
    const oddArray = integers.filter((integer) => integer % 2 !== 0);

    return evenArray.length === 1 ? evenArray[0] : oddArray[0];
}

/**
 * @param {number[]} integers
 * @return {number}
 */
function findOutlierTwo(integers) {
    //  use check object
    //  return the even integer if the odd count is greater than one
    //  return the odd integer if the even count is greater than one
    const check = { odd: { count: 0, integer: null }, even: { count: 0, integer: null } };
    let output = null;

    for (let index = 0; index < integers.length; index++) {
        const integer = integers[index];

        if (integer % 2 === 0) {
            check.even.count++;
            check.even.integer = integer;
        } else {
            check.odd.count++;
            check.odd.integer = integer;
        }

        if (check.even.count === 1 && check.odd.count > 1) output = check.even.integer;
        if (check.odd.count === 1 && check.even.count > 1) output = check.odd.integer;
        if (output) break;
    }

    return output;
}

const integers = [1, 1, 0, 1, 1];

findOutlier(integers);
findOutlierTwo(integers);

module.exports = findOutlier;
