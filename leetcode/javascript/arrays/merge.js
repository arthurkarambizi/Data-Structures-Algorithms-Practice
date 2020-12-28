/*
 ** Source : https://leetcode.com/problems/merge-sorted-array/
 ** Date   : 12-28-2020
 */

/*
 **
 ** Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 **
 ** Note:
 **
 ** The number of elements initialized in nums1 and nums2 are m and n respectively.
 ** You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
 ** Example:
 **
 ** Input:
 ** nums1 = [1,2,3,0,0,0], m = 3
 ** nums2 = [2,5,6],       n = 3
 **
 ** Output: [1,2,2,3,5,6]
 **
 **
 ** Constraints:
 **
 ** -10^9 <= nums1[i], nums2[i] <= 10^9
 ** nums1.length == m + n
 ** nums2.length == n
 **
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * TODO: refactor
 */
function merge(nums1, m, nums2, n) {
    for (let index = 0; index < nums2.length; index++) {
        const element = nums2[index];
        nums1.splice(nums1.length - (index + 1), 1); // remove empty space from the array
        nums1.push(element); // add nums element
    }
    nums1.sort((a, b) => a - b);
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3; // output: [1,2,2,3,5,6]
merge(nums1, m, nums2, n);
