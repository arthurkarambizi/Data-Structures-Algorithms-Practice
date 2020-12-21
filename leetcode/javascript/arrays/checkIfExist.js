/*
 ** Source : https://leetcode.com/problems/check-if-n-and-its-double-exist/
 ** Date   : 12-21-2020
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
function checkIfExist(arr) {
    const checkObject = {};
    let countZero = 0;
    let output = false;

    for (let index = 0; index < arr.length; index++) {
        const currentNumber = arr[index];
        const double = currentNumber * 2;

        if (!(currentNumber in checkObject) && currentNumber !== 0) {
            checkObject[currentNumber] = double;
        }

        if (currentNumber === 0) {
            countZero += 1;
        }

        if (countZero > 1 || double in checkObject || currentNumber / 2 in checkObject) {
            output = true;
            break;
        }
    }

    return output;
}

checkIfExist([-2, 0, 10, -19, 4, 6, -8]); //false
checkIfExist([0, 0]); //true
checkIfExist([10, 2, 5, 3]); // true
checkIfExist([7, 1, 14, 11]); //true
