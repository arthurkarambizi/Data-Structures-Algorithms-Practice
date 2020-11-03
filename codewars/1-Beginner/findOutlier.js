/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
 */
function findOutlier(integers) {
    let evenArray = [];
    let oddArray = [];
    integers.forEach(integer => {
        integer % 2 == 0 ? evenArray.push(integer) : oddArray.push(integer);
    });
    return oddArray.length < evenArray.length ? oddArray[0] : evenArray[0];
}
const integers = [1, 4, 6, 3, 8];

findOutlier(integers);

//--------------------------------------------------------------------------------
//other solutions

function findOutlier(int) {
    var even = int.filter(a => a % 2 == 0);
    var odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}
