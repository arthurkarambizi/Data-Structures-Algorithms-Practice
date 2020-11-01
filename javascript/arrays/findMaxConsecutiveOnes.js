/*
** Source : https://leetcode.com/problems/max-consecutive-ones/
** Date   : 11-01-2020
*/

/*
** Given a binary array, find the maximum number of consecutive 1s in this array.
**
** Example 1:
** Input: [1,1,0,1,1,1]
** Output: 3
** Explanation: The first two digits or the last three digits are consecutive 1s.
**     The maximum number of consecutive 1s is 3.
** Note:
**
** The input array will only contain 0 and 1.
** The length of input array is a positive integer and will not exceed 10,000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0;
    let output = 0;
    for (let index = 0; index < nums.length; index++) {
        const number = nums[index];

        if (number === 1) {
            count++;
            if (count >= output) {
                output = count;
            }
        } else {
            count = 0;
        }
    }
    return output; // if results empty return 0
};

const nums = [1, 1, 0, 1, 1, 1]; // output 3
// const nums = [0]; // output 0

findMaxConsecutiveOnes(nums);
