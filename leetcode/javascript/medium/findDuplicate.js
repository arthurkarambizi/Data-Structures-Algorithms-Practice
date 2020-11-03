/*
** Source : https://leetcode.com/problems/find-the-duplicate-number/
** Date   : 11-01-2020
*/

/*
** Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.
**
** Example 1:
**
** Input: [1,3,4,2,2]
** Output: 2
** Example 2:
**
** Input: [3,1,3,4,2]
** Output: 3
** Note:
**
** You must not modify the array (assume the array is read only).
** You must use only constant, O(1) extra space.
** Your runtime complexity should be less than O(n2).
** There is only one duplicate number in the array, but it could be repeated more than once.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//======================================================================================================
//1.create noDuplicates array, object, Map,Set
//2.for every iteration add element in noDuplicates
//3. if element exists in  return element
//======================================================================================================
var findDuplicate = function(nums) {
    let noDuplicates = [];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (noDuplicates.includes(element)) return element;
        noDuplicates.push(element);
    }
};

//--------------------------------------------------------------------------------

var findDuplicate = function(nums) {
    let noDuplicates = {}
    for (let index = 0; index < nums.length; index++){
        const element = nums[index];
        if (noDuplicates[element]) return element;
        noDuplicates[element] = true
    }
};

//--------------------------------------------------------------------------------

// faster
var findDuplicate = function(nums) {
    let noDuplicates = new Map();
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (noDuplicates.has(element)) return element;
        noDuplicates.set(element, true);
    }
};

//--------------------------------------------------------------------------------

var findDuplicate = function(nums) {
    let noDuplicates = new Set();
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (noDuplicates.has(element)) return element;
        noDuplicates.add(element);
    }
};

//======================================================================================================
//1.sort nums array (numsSorted)
//2.numsSorted if element === nextElemet return element
//3. if element exists in noDuplicates array return element
//======================================================================================================

var findDuplicate = function(nums) {
    let numsSorted = nums.sort((a, b) => a - b);
    for (let index = 0; index < numsSorted.length; index++) {
        const element = nums[index];
        let nextElemet = nums[index + 1];
        if (element === nextElemet) return element;
    }
};

//other solutions
// Floyd's Tortoise and Hare (Cycle Detection)
// Algorithm
// First off, we can easily show that the constraints of the problem imply that a cycle must exist. Because each number in nums is between 11 and n, it will necessarily point to an index that exists. Therefore, the list can be traversed infinitely, which implies that there is a cycle. Additionally, because 0 cannot appear as a value in nums,nums[0] cannot be part of the cycle. Therefore, traversing the array in this manner from nums[0] is equivalent to traversing a cyclic linked list. Given this, the problem can be solved just like Linked List Cycle II.

var findDuplicate = function(nums) {
    // Find the intersection point of the two runners.
    let tortoise = nums[0];
    let hare = nums[0];
    while (true) {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
        if (tortoise == hare) {
            break;
        }
    }

    // Find the "entrance" to the cycle.
    let ptr1 = nums[0];
    let ptr2 = tortoise;

    while (ptr1 != ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }

    return ptr1;
};

let nums = [1, 3, 4, 2, 2];
findDuplicate(nums);
