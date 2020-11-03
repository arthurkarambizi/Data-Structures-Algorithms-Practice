/*
** Source : https://leetcode.com/problems/transpose-matrix/
** Date   : 10-16-2019
*/

/*
** Given a matrix A, return the transpose of A.
**
** The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.
**
** Example 1:
**
** Input: [[1,2,3],[4,5,6],[7,8,9]]
** Output: [[1,4,7],[2,5,8],[3,6,9]]
** Example 2:
**
** Input: [[1,2,3],[4,5,6]]
** Output: [[1,4],[2,5],[3,6]]
**
** Note:
**
** 1 <= A.length <= 1000
** 1 <= A[0].length <= 1000
*/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */

var transpose = function(A) {
    let results = [];
    for (let index = 0; index < A.length; index++) {
        const myArray = A[index];

        for (let nextIndex = 0; nextIndex < myArray.length; nextIndex++) {
            const element = myArray[nextIndex];

            if (results[nextIndex]) {
                results[nextIndex].push(element);
            } else {
                let columnArr = [element];
                results.push(columnArr);
            }
        }
    }

    return results;
};

//--------------------------------------------------------------------------------
var transpose = function(A) {
    let results = [];
    let counter = 0;
    for (let index = 0; index < A.length; index++) {
        const arr = A[index];
        let columnarr = [];
        results.push(arr[counter])
        counter++
    }

    return results;
};

let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let A = [[1, 2, 3], [4, 5, 6]];
transpose(A);
