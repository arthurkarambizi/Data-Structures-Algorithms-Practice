/*
 ** Source : https://leetcode.com/problems/contains-duplicate/
 ** Date   : 12-22-2020
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
 * O(n)
 */
function containsDuplicate(nums) {
    const set = [...new Set(nums)];
    return set.length < nums.length;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 * O(n)
 */
function containsDuplicate_Two(nums) {
    const numsObj = {};
    let output = false;

    for (let index = 0; index < nums.length; index++) {
        const currentNumber = nums[index];

        if (currentNumber in numsObj) {
            output = true;
            break;
        }

        numsObj[currentNumber] = currentNumber;
    }

    return output;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 * O(nlogn)
 */
function containsDuplicateThree(nums) {
    let output = false;

    nums.sort((a, b) => b - a);

    for (let index = 0; index < nums.length; index++) {
        const currentNumber = nums[index];
        const nextNumber = nums[index + 1];

        if (currentNumber === nextNumber) {
            output = true;
            break;
        }
    }

    return output;
}

containsDuplicate([1, 2, 3]); // false
containsDuplicate_Two([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]); // true
