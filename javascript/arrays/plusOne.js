/*
** Source : https://leetcode.com/problems/plus-one/
** Date   : 11-01-2020
*/

/*
** Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
**
** The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
**
** You may assume the integer does not contain any leading zero, except the number 0 itself.
**
**
**
** Example 1:
**
** Input: digits = [1,2,3]
** Output: [1,2,4]
** Explanation: The array represents the integer 123.
** Example 2:
**
** Input: digits = [4,3,2,1]
** Output: [4,3,2,2]
** Explanation: The array represents the integer 4321.
** Example 3:
**
** Input: digits = [0]
** Output: [1]
**
**
** Constraints:
**
** 1 <= digits.length <= 100
** 0 <= digits[i] <= 9
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	let num = BigInt(digits.join('')) + BigInt(1);

	  return String(num).split('');
  };

  let digits = [1,2,3] //[1,2,4]
//   let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3] //[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]


  console.log(  plusOne(digits))