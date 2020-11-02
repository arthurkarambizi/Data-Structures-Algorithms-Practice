/*
** Source : https://leetcode.com/problems/contains-duplicate/
** Date   : 11-01-2020
*/

/*
** Given an array of integers, find if the array contains any duplicates.
**
** Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
**
** Example 1:
**
** Input: [1,2,3,1]
** Output: true
** Example 2:
**
** Input: [1,2,3,4]
** Output: false
** Example 3:
**
** Input: [1,1,1,3,3,4,3,2,4,2]
** Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
    let set = [...new Set(nums)];
    return set.length !== nums.length ? true : false;
};

// var containsDuplicate = function (nums) {
//     nums.sort((a, b) => b - a);
//     for (let index = 0; index < nums.length; index++) {
//         if (nums[index] === nums[index + 1]) {
//             return true;
//         }
//     }

//     return false;
// };

// var containsDuplicate = function (nums) {
//     let numsObj = {};
//     for (let index = 0; index < nums.length; index++) {
//         if (!(nums[index] in numsObj)) {
//             numsObj[nums[index]] = nums[index];
//         } else {
//             return true;
//         }
//     }

//     return false;
// };
let nums = [1, 2, 3]; //Output: false
// let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]; //Output: true

containsDuplicate(nums);
