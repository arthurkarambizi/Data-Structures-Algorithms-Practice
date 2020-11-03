/*
** Source : https://leetcode.com/problems/single-number/
** Date   : 10-16-2019
*/

/*
** Given a non-empty array of integers, every element appears twice except for one. Find that single one.
**
** Note:
**
** Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
**
** Example 1:
**
** Input: [2,2,1]
** Output: 1
** Example 2:
**
** Input: [4,1,2,1,2]
** Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    let numsSorted = nums.sort((a, b) => a - b);
    let numsFiltered = numsSorted.filter((element, index) => {
        if (element !== numsSorted[index - 1] && element !== numsSorted[index + 1]) {
            return [element];
        }
    });
    return numsFiltered[0]
};

//--------------------------------------------------------------------------------
var singleNumber = function(nums) {
    let numsSorted = nums.sort((a, b) => a - b);
    for (let index = 0; index < numsSorted.length; index++) {
        const element = numsSorted[index];
        if (element !== numsSorted[index - 1] && element !== numsSorted[index + 1]) {
            return element;
        }
    }
};

//--------------------------------------------------------------------------------
var singleNumber = function(nums) {
    let myObject = {};

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (myObject[element]) {
            myObject[element] += 1;
        } else {
            myObject[element] = 1;
        }
    }

    for (const value in myObject) {
        const key = myObject[value];
        if (key === 1) {
            return value;
        }
    }
};

//--------------------------------------------------------------------------------
var singleNumber = function(nums) {
    let myMap = new Map();

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (myMap.get(element)) {
            let incrementValue = myMap.get(element) + 1;
            myMap.set(element, incrementValue);
        } else {
            myMap.set(element, 1);
        }
    }

    for (const [value, key] of myMap) {
        if (key === 1) {
            return value;
        }
    }
};

let nums = [1, 0, 1];
singleNumber(nums);