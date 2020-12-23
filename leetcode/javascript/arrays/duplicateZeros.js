/*
 ** Source : https://leetcode.com/problems/duplicate-zeros/
 ** Date   : 11-01-2020
 */

/*
 ** Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
 **
 ** Note that elements beyond the length of the original array are not written.
 **
 ** Do the above modifications to the input array in place, do not return anything from your function.
 **
 **
 **
 ** Example 1:
 **
 ** Input: [1,0,2,3,0,4,5,0]
 ** Output: null
 ** Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
 ** Example 2:
 **
 ** Input: [1,2,3]
 ** Output: null
 ** Explanation: After calling your function, the input array is modified to: [1,2,3]
 **
 **
 ** Note:
 **
 ** 1 <= arr.length <= 10000
 ** 0 <= arr[i] <= 9
 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
    let arrCopy = [...arr];
    let count = 0;
    for (let index = 0; index < arrCopy.length; index++) {
        const element = arrCopy[index];
        if (element === 0) {
            arr.splice(count + 1, 0, 0); //count + 1: index to insert new element,0:remove 0 element in arr array, 0: add new element 0 in arr array
            count += 2; // increase the index count by 2 when new 0 is added
            arr.length = arrCopy.length; //reset the arr length
        } else {
            count++;
        }
    }
}

duplicateZeros([0, 1, 7, 6, 0, 2, 0, 7]); // [0,0,1,7,6,0,0,2]
duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]); // [1,0,0,2,3,0,0,4]
