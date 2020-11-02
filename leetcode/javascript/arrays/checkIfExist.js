/*
** Source : https://leetcode.com/problems/check-if-n-and-its-double-exist/
** Date   : 11-01-2020
*/

/*
** Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
**
** More formally check if there exists two indices i and j such that :
**
** i != j
** 0 <= i, j < arr.length
** arr[i] == 2 * arr[j]
**
**
** Example 1:
**
** Input: arr = [10,2,5,3]
** Output: true
** Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
** Example 2:
**
** Input: arr = [7,1,14,11]
** Output: true
** Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
** Example 3:
**
** Input: arr = [3,1,7,11]
** Output: false
** Explanation: In this case does not exist N and M, such that N = 2 * M.
**
**
** Constraints:
**
** 2 <= arr.length <= 500
** -10^3 <= arr[i] <= 10^3
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var checkIfExist = function (arr) {
    let zeroCount = 0; // count 0 in arr
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element === 0) zeroCount++;
        let double = element * 2;
        if (zeroCount > 1 || (element !== 0 && arr.includes(double))) return true; //return true when there are more than one zero because 0*2 = 0;
    }

    return false;
};

// var checkIfExist = function (arr) {
//     let checkObject = {};
//     let zeroCount = 0; // count 0 in arr
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if (element === 0) zeroCount++;
//         checkObject[element] = element;
//         if (zeroCount > 1) return true; //return true when there are more than one zero because 0*2 = 0;
//     }

//     for (let index = 0; index < arr.length; index++) {
//         const double = arr[index] * 2;
//         if (checkObject[double]) return true;
// 	}

//     return false;
// };


// let arr = [0, 0]; //output: true /0*2 = 0
// let arr = [10, 2, 5, 3]; //output: true /5*2 = 10
let arr = [-2, 0, 10, -19, 4, 6, -8]; // //output: false

checkIfExist(arr);
