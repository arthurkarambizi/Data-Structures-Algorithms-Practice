/*
 ** Source : https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 ** Date   : 11-01-2020
 */

/*
 ** Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 **
 ** Find all the elements of [1, n] inclusive that do not appear in this array.
 **
 ** Could you do it without extra space and in O(n) runtime? You may assume the returned list does not counter as extra space.
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
 * TODO: refactor
 */

function findDisappearedNumbers(nums) {
    const output = [];
    const numsObj = {};
    let counter = 1;

    for (let index = 0; index < nums.length; index++) {
        const currentNumber = nums[index];
        numsObj[currentNumber] = currentNumber;
    }

    for (let index = 0; index < nums.length; index++) {
        if (!(counter in numsObj)) {
            output.push(counter);
        }

        counter++;
    }

    return output;
}

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]); // [5,6]
