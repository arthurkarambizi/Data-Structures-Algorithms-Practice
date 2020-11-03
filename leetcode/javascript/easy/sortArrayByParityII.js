/*
** Source : https://leetcode.com/problems/sort-array-by-parity-ii/
** Date   : 10-16-2019
*/

/*
** Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
**
** Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
**
** You may return any answer array that satisfies this condition.
**
** Example 1:
**
** Input: [4,2,5,7]
** Output: [4,5,2,7]
** Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
**
** Note:
**
** 2 <= A.length <= 20000
** A.length % 2 == 0
** 0 <= A[i] <= 1000
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
//======================================================================================================
//1. evenArray filter even elements
//2. oddArray filter odd elements
//3. finalArray.push(evenElement, oddElement);
//======================================================================================================

var sortArrayByParityII = function(A) {
    let evenArray = A.filter(element => element % 2 == 0);
    let oddArray = A.filter(element => element % 2 !== 0);
    let finalArray = [];

    for (let index = 0; index < evenArray.length; index++) {
        const evenElement = evenArray[index];
        const oddElement = oddArray[index];
        finalArray.push(evenElement, oddElement);
    }

    return finalArray;
};

//--------------------------------------------------------------------------------
//other solution

var sortArrayByParityII = function(A) {
    let finalArray = new Array(A.length);
    let odd = 1,
        even = 0;

    for (let index = 0; index < A.length; index++) {
        const element = A[index];
        if (element % 2 === 0) {
            finalArray[even] = element;
            even += 2;
        } else {
            finalArray[odd] = element;
            odd += 2;
        }
    }

    return finalArray;
};

let A = [4, 2, 5, 7];
sortArrayByParityII(A);
