/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let output = 0;
    for (let index = 0; index < nums.length; index++) {
        const numberDigits = String(nums[index]).length;
        if (numberDigits % 2 === 0) {
            output++;
        }
	}

    return output;
};

let nums = [12, 345, 2, 6, 7896]; // output 2
// let nums = [555,901,482,1771,11] // output 1
findNumbers(nums)
