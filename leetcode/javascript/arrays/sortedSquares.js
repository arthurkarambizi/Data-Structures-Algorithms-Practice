/*
** Source : https://leetcode.com/problems/squares-of-a-sorted-array/
** Date   : 11-01-2020
*/

/*
** Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
**
**
**
** Example 1:
**
** Input: [-4,-1,0,3,10]
** Output: [0,1,9,16,100]
** Example 2:
**
** Input: [-7,-3,2,3,11]
** Output: [4,9,9,49,121]
**
**
** Note:
**
** 1 <= A.length <= 10000
** -10000 <= A[i] <= 10000
** A is sorted in non-decreasing order.
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    let output = [];
    for (let index = 0; index < A.length; index++) {
        const square = A[index] * A[index];
        output.push(square);
    }
    return output.sort((a, b) => a - b);
};

// let A = [-4, -1, 0, 3, 10]; // Output: [0,1,9,16,100]
let A = [-7,-3,2,3,11] //Output: [4,9,9,49,121]

sortedSquares(A);
