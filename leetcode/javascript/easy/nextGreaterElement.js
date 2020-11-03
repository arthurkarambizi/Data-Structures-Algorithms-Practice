/*
** Source : https://leetcode.com/problems/next-greater-element-i/
** Date   : 10-16-2019
*/

/*
** You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
**
** The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.
**
** Example 1:
** Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
** Output: [-1,3,-1]
** Explanation:
**     For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
**     For number 1 in the first array, the next greater number for it in the second array is 3.
**     For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
** Example 2:
** Input: nums1 = [2,4], nums2 = [1,2,3,4].
** Output: [3,-1]
** Explanation:
**     For number 2 in the first array, the next greater number for it in the second array is 3.
**     For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
** Note:
** All elements in nums1 and nums2 are unique.
** The length of both nums1 and nums2 would not exceed 1000.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function(nums1, nums2) {
    let results = [];
    for (let index = 0; index < nums1.length; index++) {
        const num1Element = nums1[index];
        let num2ElementIndex = nums2.findIndex(el => el === num1Element);
        let nums2RightPart = nums2.slice(num2ElementIndex + 1, nums2.length);
        let nums2RightPartFiltered = nums2RightPart.filter(el => num1Element <= el );

        if (nums2RightPartFiltered.length) {
            results.push(nums2RightPartFiltered[0]);
        } else {
            results.push(-1);
        }
    }
    return results;
};

var nextGreaterElement = function(nums1, nums2) {
    let results = [];
    for (let index = 0; index < nums1.length; index++) {
        const num1Element = nums1[index];
        const num2ElementIndex = nums2.indexOf(num1Element);
        let findNextNumber = true;

        for (let nextIndex = num2ElementIndex + 1; nextIndex < nums2.length; nextIndex++) {
            const num2Element = nums2[nextIndex];
            if (num2Element > num1Element) {
                results.push(num2Element);
                findNextNumber = true;
                break;
            }
        }

        if (!findNextNumber) {
            results.push(-1);
        }
    }

    return results;
};

// let nums1 = [4, 1, 2],
//     nums2 = [1, 3, 4, 2];

let nums1 = [1, 3, 5, 2, 4];
let nums2 = [6, 5, 4, 3, 2, 1, 7];
// let nums1 = [2, 4],
//     nums2 = [1, 2, 3, 4];
nextGreaterElement(nums1, nums2);
