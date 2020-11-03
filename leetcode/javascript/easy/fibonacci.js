/*
** Source : https://leetcode.com/problems/fibonacci-number/
** Date   : 10-16-2019
*/

/*
** The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
**
** F(0) = 0,   F(1) = 1
** F(N) = F(N - 1) + F(N - 2), for N > 1.
** Given N, calculate F(N).
**
**
**
** Example 1:
**
** Input: 2
** Output: 1
** Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
** Example 2:
**
** Input: 3
** Output: 2
** Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
** Example 3:
**
** Input: 4
** Output: 3
** Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
**
**
** Note:
**
** 0 ≤ N ≤ 30.
*/

/**
 * @param {number} N
 * @return {number}
 */

var fib = function(N) {
    let fibArr = [];
    for (let index = 0; index < N + 1; index++) {
        if (index > 1) {
            let fibNumber = fibArr[index - 1] + fibArr[index - 2];
            fibArr.push(fibNumber);
        } else {
            //for 0 and 1 push index
            fibArr.push(index);
        }
    }

    let results = fibArr[fibArr.length - 1];
    return results;
};

//--------------------------------------------------------------------------------

var fib = function(N) {
    let result = 0;
    let indexOne = 0,
        indexTwo = 1;
    for (let index = 0; index < N + 1; index++) {
        if (index > 1) {
            result = indexOne + indexTwo;
            indexOne = indexTwo;
            indexTwo = result;
        } else {
            result = index;
        }
    }
    return result;
};

//--------------------------------------------------------------------------------

function fibonacciRecursive(N) {
    if (N === 0) return 0;
    else if (N === 1) return 1;
    else return fibonacciRecursive(N - 1) + fibonacciRecursive(N - 2); //i[n] = i[n-1] + i[n-2]
  }

let N = 7;
fib(N);
fibonacciRecursive(N)
