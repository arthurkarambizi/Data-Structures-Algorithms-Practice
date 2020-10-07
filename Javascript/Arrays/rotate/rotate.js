/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	let numsLength = nums.length;
	function rotateOnce () {
		nums.unshift(nums[nums.length -1]);
		nums.length = numsLength;
	 }

	for (let index = 0; index < k; index++) {
		rotateOnce()
	}
};

// let nums = [1,2,3,4,5,6,7]; let k = 3; //[5,6,7,1,2,3,4]
let nums = [-1,-100,3,99]; let k = 2 //[3,99,-1,-100]
rotate(nums,k)