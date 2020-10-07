/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
    let set = [...new Set(nums)];
    return set.length !== nums.length ? true : false;
};

// var containsDuplicate = function (nums) {
//     nums.sort((a, b) => b - a);
//     for (let index = 0; index < nums.length; index++) {
//         if (nums[index] === nums[index + 1]) {
//             return true;
//         }
//     }

//     return false;
// };

// var containsDuplicate = function (nums) {
//     let numsObj = {};
//     for (let index = 0; index < nums.length; index++) {
//         if (!(nums[index] in numsObj)) {
//             numsObj[nums[index]] = nums[index];
//         } else {
//             return true;
//         }
//     }

//     return false;
// };
let nums = [1, 2, 3]; //Output: false
// let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]; //Output: true

containsDuplicate(nums);
