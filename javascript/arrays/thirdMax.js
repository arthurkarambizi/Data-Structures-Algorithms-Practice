/*
** Source : https://leetcode.com/problems/third-maximum-number/
** Date   : 11-01-2020
*/

/*
** Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
**
** Example 1:
** Input: [3, 2, 1]
**
** Output: 1
**
** Explanation: The third maximum is 1.
** Example 2:
** Input: [1, 2]
**
** Output: 2
**
** Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
** Example 3:
** Input: [2, 2, 3, 1]
**
** Output: 1
**
** Explanation: Note that the third maximum here means the third maximum distinct number.
** Both numbers with value 2 are both considered as second maximum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    //remove duplicates and sort array
    let noDuplicates = [...new Set(nums)].sort((a, b) => b - a);
    let results = noDuplicates.slice(0, 3);
    return results.length === 3 ? results[2] : results[0];
};

// let nums = [3, 2, 1]; //Output: 1
// let nums = [1, 2]; // Output: 2
// let nums = [2, 2, 3, 1]; // Output: 1
// let nums = [1, 7, 8, 10]; // 7
// let nums = [5, 2, 2]; // 5
// let nums = [5,2,6];  // 2
let nums = [2, 2, 2, 1]; // 2

thirdMax(nums);
