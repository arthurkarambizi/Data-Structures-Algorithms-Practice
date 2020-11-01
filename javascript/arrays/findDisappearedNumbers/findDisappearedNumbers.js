/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
    let numbjObj = {};
    let results = [];
	let count = 1;

    for (let index = 0; index < nums.length; index++) {
        numbjObj[nums[index]] = nums[index];
    }

    for (let index = 0; index < nums.length; index++) {
        if (!numbjObj[count]) {
            results.push(count);
        }
        count++;
    }
    return results;
};

//slow
// var findDisappearedNumbers = function (nums) {
//     let results = [];
//     let count = 1;
//     for (let index = 0; index < nums.length; index++) {
//         if (!nums.includes(count)) {
//             results.push(count);
//         }
//         count++;
//     }

//     return results;
// };

let nums = [4, 3, 2, 7, 8, 2, 3, 1]; //Output:[5,6]
console.log(findDisappearedNumbers(nums));
