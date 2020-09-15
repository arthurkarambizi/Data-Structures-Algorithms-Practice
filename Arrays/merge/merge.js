/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let num1Copy = [...nums1];
	let count = 0;

	// nums2.forEach(elementTwo => {
	// 	num1Copy.forEach(elementOne => {

	// 	});
	// });
    // for (let index = 0; index < nums2.length; index++) {
    //     const nums2Element = nums2[index];
	// 	console.log(nums2Element)

    //     for (let numIndex = 0; index < num1Copy.length; numIndex++) {
	// 		const num1Element = num1Copy[numIndex];
	// 		console.log(num1Element);

    //         // if (nums2Element <= num1Element) {

    //         //     // nums1.splice(count, 0, 'h');
    //         //     // nums2.splice(index, 1);
    //         //     // nums1.length = num1Copy.length;
    //         //     // count += 2;
    //         // } else {
    //         //     count++;
    //         // }
    //     }
	// }
	console.log(nums2);
	console.log(nums1);
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);