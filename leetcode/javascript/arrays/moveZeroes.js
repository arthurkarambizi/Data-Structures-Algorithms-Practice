/*
 ** Source : https://leetcode.com/problems/move-zeroes/
 ** Date   : 12-28-2020
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
 * O(n)
 */
function moveZeroes(nums) {
    let anchor = 0;
    for (let index = 0; index < nums.length; index++) {
        const currentNumber = nums[index];

        if (currentNumber !== 0) {
            nums[index] = nums[anchor];
            nums[anchor] = currentNumber;
            anchor++;
        }
    }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *  O(n^2)
 */
function moveZeroes_two(nums) {
    // the indices will be preserved as you go backwards.
    for (let index = nums.length - 1; index >= 0; index--) {
        if (nums[index] === 0) {
            nums.splice(index, 1);
            nums.push(0);
        }
    }
}

moveZeroes([0, 0, 1, 1, 0, 3, 12]); //  [1,3,12,0,0];
moveZeroes_two([1, 0, 1]); // [1,1,0]
