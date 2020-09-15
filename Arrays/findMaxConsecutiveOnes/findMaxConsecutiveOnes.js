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
