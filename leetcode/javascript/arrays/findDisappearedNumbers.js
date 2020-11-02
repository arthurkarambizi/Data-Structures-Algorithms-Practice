/*
** Source : https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
** Date   : 11-01-2020
*/

/*
** Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
**
** Find all the elements of [1, n] inclusive that do not appear in this array.
**
** Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
**
** Example:
**
** Input:
** [4,3,2,7,8,2,3,1]
**
** Output:
** [5,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
    let numbjObj = {};
    let results = [];
	let count = 1;

    for (let index = 0; index < nums.length; index++) {
        numbjObj[nums[index]] = nums[index];
    }

    for (let index = 0; index < nums.length; index++) {
        if (!numbjObj[count]) {
            results.push(count);
        }
        count++;
    }
    return results;
};

//slow
// var findDisappearedNumbers = function (nums) {
//     let results = [];
//     let count = 1;
//     for (let index = 0; index < nums.length; index++) {
//         if (!nums.includes(count)) {
//             results.push(count);
//         }
//         count++;
//     }

//     return results;
// };

let nums = [4, 3, 2, 7, 8, 2, 3, 1]; //Output:[5,6]
console.log(findDisappearedNumbers(nums));
