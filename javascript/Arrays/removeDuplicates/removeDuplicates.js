/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if (element == nums[index + 1]) {
            nums.splice(index, 1);
            index = index - 1;
        }
    }
    return nums.length;
};
let nums = [1,1,2]; // output: 2 /[1,2];
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // output: 2 /[0,1,2,3,4];  [0,1,1,2,3,4]
removeDuplicates(nums);
