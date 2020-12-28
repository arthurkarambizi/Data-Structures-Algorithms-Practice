/*
 ** Source : https://leetcode.com/problems/max-consecutive-ones/
 ** Date   : 12-28-2020
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
function findMaxConsecutiveOnes(nums) {
    let count = 0;
    let output = 0;

    for (let index = 0; index < nums.length; index++) {
        const number = nums[index];

        count++;

        if (number !== 1) {
            count = 0;
        }

        if (count > output) {
            output = count;
        }
    }

    return output;
}

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]); //  3
findMaxConsecutiveOnes([0]); //  0
