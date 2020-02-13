//solution 1 O(n)
/* let nums = [4, 2, 1], target = 6;
results[target - currentNumber] = index;
results = { 2: 0, 4: 1, 5: 2 }
if results[ currentNumber ] exist in results {} ( !== undefined ) return [ results[ currentNumber ], index ];
 */
const twoSum = function (nums, target) {
    const results = {};
    for (let index = 0; index < nums.length; index++) {
        const currentNumber = nums[index];
        if (currentNumber in results) {
            // if ( results[ currentNumber ] !== undefined )
            return [results[currentNumber], index];
        }
        results[target - currentNumber] = index;
    }
};

// solution 2 O(n^2)
// var twoSum = function(nums, target) {
//     for (let index = 0; index < nums.length; index++) {
//         const currentNumber = nums[index];
//         let nextNumberIndex = nums.findIndex(element => element === target - currentNumber);
//         if (nextNumberIndex > -1 && index !== nextNumberIndex) {
//             return [index, nextNumberIndex];
//         }
//     }
//     return false;
// };

let nums = [4, 2, 1],
    target = 6;
console.log(twoSum(nums, target));