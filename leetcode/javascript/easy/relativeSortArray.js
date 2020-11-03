/*
** Source : https://leetcode.com/problems/relative-sort-array/
** Date   : 10-16-2019
*/

/*
** Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
**
** Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.
**
** Example 1:
**
** Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
** Output: [2,2,2,1,4,3,3,9,6,7,19]
**
** Constraints:
**
** arr1.length, arr2.length <= 1000
** 0 <= arr1[i], arr2[i] <= 1000
** Each arr2[i] is distinct.
** Each arr2[i] is in arr1.
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

var relativeSortArray = function(arr1, arr2) {
    let isInArr2 = [];
    let isNotInArr2 = [];
    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index];
        let indexed = arr2.findIndex(arr2El => arr2El === element);
        // if element in arr1 is in arr2, add element in isInArr2
        //else add element in isNotInArr2
        if (indexed > -1) {
            if (isInArr2[indexed]) {
                isInArr2[indexed].push(element);
            } else {
                isInArr2[indexed] = [];
                isInArr2[indexed].push(element);
            }
        } else {
            isNotInArr2.push(element);
        }
    }

    // change isInArr2 in one array of numbers
    // join arrays in in isInArr2 in one array
    let isInArr2Final = isInArr2
        .join(',')
        .split(',')
        .map(element => Number(element));
    let isNotInArr2Sorted = isNotInArr2.sort((a, b) => a - b);
    let results = [...isInArr2Final, ...isNotInArr2Sorted];
    return results;
};

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];
relativeSortArray(arr1, arr2);
