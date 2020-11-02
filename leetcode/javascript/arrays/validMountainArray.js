/*
** Source : https://leetcode.com/problems/valid-mountain-array/
** Date   : 11-01-2020
*/

/*
** Given an array A of integers, return true if and only if it is a valid mountain array.
**
** Recall that A is a mountain array if and only if:
**
** A.length >= 3
** There exists some i with 0 < i < A.length - 1 such that:
** A[0] < A[1] < ... A[i-1] < A[i]
** A[i] > A[i+1] > ... > A[A.length - 1]
**
**
**
**
** Example 1:
**
** Input: [2,1]
** Output: false
** Example 2:
**
** Input: [3,5,5]
** Output: false
** Example 3:
**
** Input: [0,3,2,1]
** Output: true
**
**
** Note:
**
** 0 <= A.length <= 10000
** 0 <= A[i] <= 10000
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
    const mountain = { increase: false, decrease: false };
    if (A.length >= 3) {
        for (let index = 0; index < A.length; index++) {
            const element = A[index];

            if (element < A[index + 1]) mountain['increase'] = true; // when mountain increase
            if (element > A[index + 1]) mountain['decrease'] = true; // when mountain decrase

            if (mountain['decrease'] && element < A[index + 1]) return false; //if mountain decrease and increase return
            if (element === A[index + 1]) return false; //if mountain is flat return false
        }

        // if mountain strictly increase and strictly decrease
        if (mountain['increase'] && mountain['decrease']) {
            return true;
        }
    }

    return false;
};

// let A = [2,1] // Output: false
// let A = [3, 5, 3]; // Output: false
// let A = [0, 3, 2, 1]; //Output: true
let A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //  Output: false
validMountainArray(A);
