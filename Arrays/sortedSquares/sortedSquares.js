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
