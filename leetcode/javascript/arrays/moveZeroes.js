/*
** Source : https://leetcode.com/problems/move-zeroes/
** Date   : 11-01-2020
*/

/*
** Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
**
** Example:
**
** Input: [0,1,0,3,12]
** Output: [1,3,12,0,0]
** Note:
**
** You must do this in-place without making a copy of the array.
** Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let counter = 0;

	//remove zero from array and count how many zero in the nums array
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === 0) {
			nums.splice(index,1);
			index--; // decrease the index because an element was removed from nums array
			counter++
        }
	}
	// add all zeros back to the nums array
	for (let index = 0; index < counter; index++) {
		nums.push(0)
	}
};
let nums = [0, 1, 0, 3, 12]; // Output: [1,3,12,0,0];
// let nums = [0, 0, 3, 12]; // Output: [1,3,12,0,0];

moveZeroes(nums);