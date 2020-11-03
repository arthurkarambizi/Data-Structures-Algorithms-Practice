/*
** Source : https://leetcode.com/problems/height-checker/
** Date   : 10-16-2019
*/

/*
** Students are asked to stand in non-decreasing order of heights for an annual photo.
**
** Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)
**
** Example 1:
**
** Input: [1,1,4,2,1,3]
** Output: 3
** Explanation:
** Students with heights 4, 3 and the last 1 are not standing in the right positions.
**
** Note:
**
** 1 <= heights.length <= 100
** 1 <= heights[i] <= 100
*/

/**
 * @param {number[]} heights
 * @return {number}
 */

var heightChecker = function(heights) {
    let sortedHeights = [...heights].sort((a, b) => a - b);
    let resultsArray = sortedHeights.filter((height, index) => height !== heights[index]);
    return resultsArray.length;
};

//--------------------------------------------------------------------------------
var heightChecker = function(heights) {
    let sortedHeights = [...heights].sort((a, b) => a - b);
    let results = 0;
    for (let index = 0; index < sortedHeights.length; index++) {
        if (heights[index] !== sortedHeights[index]) {
            results++;
        }
    }
    return results;
};

let heights = [1, 1, 4, 2, 1, 3];
heightChecker(heights);
