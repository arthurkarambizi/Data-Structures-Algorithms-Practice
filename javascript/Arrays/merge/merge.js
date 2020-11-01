/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let index = 0; index < nums2.length; index++) {
        const element = nums2[index];
        nums1.splice(nums1.length - (index + 1), 1); // remove empty space from the array
        nums1.push(element); // add nums element
    }
    nums1.sort((a, b) => a - b);
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3; // output: [1,2,2,3,5,6]
merge(nums1, m, nums2, n);
