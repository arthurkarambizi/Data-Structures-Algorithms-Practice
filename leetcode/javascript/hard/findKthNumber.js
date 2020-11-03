/*
** Source : https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/
** Date   : 10-16-2019
*/

/*
** Nearly every one have used the Multiplication Table. But could you find out the k-th smallest number quickly from the multiplication table?
**
** Given the height m and the length n of a m * n Multiplication Table, and a positive integer k, you need to return the k-th smallest number in this table.
**
** Example 1:
** Input: m = 3, n = 3, k = 5
** Output:
** Explanation:
** The Multiplication Table:
** 1	2	3
** 2	4	6
** 3	6	9
**
** The 5-th smallest number is 3 (1, 2, 2, 3, 3).
** Example 2:
** Input: m = 2, n = 3, k = 6
** Output:
** Explanation:
** The Multiplication Table:
** 1	2	3
** 2	4	6
**
** The 6-th smallest number is 6 (1, 2, 2, 3, 4, 6).
** Note:
** The m and n will be in the range [1, 30000].
** The k will be in the range [1, m * n]
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var findKthNumber = function(m, n, k) {
    let rows = n;
    let columns = m;
    let results = [];
    for (let rowIndex = 1; rowIndex <= rows; rowIndex++) {
        results.push(rowIndex);
        for (let colIndex = 2; colIndex <= columns; colIndex++) {
            let result = rowIndex * colIndex;
            results.push(result);
        }
    }
    let resultsSort = results.sort((a, b) => a - b)[k - 1];
    return resultsSort;
};

//--------------------------------------------------------------------------------
var findKthNumber = function(m, n, k) {
    let lo = 1,
        hi = m * n; //[lo, hi)
    while (lo < hi) {
        let mid = Math.floor(lo + (hi - lo) / 2);
        let count = 0,
            j = m;
        for (let i = 1; i <= n; i++) {
            while (j >= 1 && i * j > mid) j--;
            count += j;
        }
        if (count < k) lo = mid + 1;
        else hi = mid;
    }
    return lo;
};
// let m = 2,
//     n = 3,
//     k = 6;
let m = 3,
    n = 3,
    k = 5;

// let m = 9895,
//     n = 28405,
//     k = 100787757;
findKthNumber(m, n, k);
