/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if (element == val) {
            nums.splice(index, 1);  // remove val from nums array
            index = index - 1; // decrease index count by 1 when val is removed from nums array
        }
    }
    return nums.length;
};

// var removeElement = function (nums, val) {
//     let arrIndex = []; //get val index in nums array

//     for (let index = 0; index < nums.length; index++) {
//         const element = nums[index];
//         if (element === val) {
//             arrIndex.push(index);
//         }
//     }

//     for (let index = 0; index < arrIndex.length; index++) {
//         const count = arrIndex[index];
//         nums.splice(count - index, 1); //remove val from nums1
//     }
//     return nums.length;
// };

const nums = [0, 1, 2, 2, 3, 0, 4, 2]; const val = 2; // output: 5 / [0,1,4,0,3]
// const nums = [3, 2, 2, 3];  const val = 2; // output: 2 / [3, 3]
// const nums = [0, 1, 2, 2, 3, 0, 4, 2]; const val = 2; // output: 6 / [0,1,2,3,0,4]
removeElement(nums, val)
