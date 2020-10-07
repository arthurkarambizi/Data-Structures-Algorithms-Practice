/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    //remove duplicates and sort array
    let noDuplicates = [...new Set(nums)].sort((a, b) => b - a);
    let results = noDuplicates.slice(0, 3);
    return results.length === 3 ? results[2] : results[0];
};

// let nums = [3, 2, 1]; //Output: 1
// let nums = [1, 2]; // Output: 2
// let nums = [2, 2, 3, 1]; // Output: 1
// let nums = [1, 7, 8, 10]; // 7
// let nums = [5, 2, 2]; // 5
// let nums = [5,2,6];  // 2
let nums = [2, 2, 2, 1]; // 2

thirdMax(nums);
