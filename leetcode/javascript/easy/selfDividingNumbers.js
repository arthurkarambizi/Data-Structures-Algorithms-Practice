/*
** Source : https://leetcode.com/problems/self-dividing-numbers/
** Date   : 10-16-2019
*/

/*
** A self-dividing number is a number that is divisible by every digit it contains.
**
** For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
**
** Also, a self-dividing number is not allowed to contain the digit zero.
**
** Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
**
** Example 1:
** Input:
** left = 1, right = 22
** Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
** Note:
**
** The boundaries of each input argument are 1 <= left <= right <= 10000.
**
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

var selfDividingNumbers = function(left, right) {
    let finalArray = [];
    for (let index = left; index <= right; index++) {
        if (!index.toString().includes(0)) {
            let indexSplit = index.toString().split('');
            let filtered = indexSplit.filter(element => index % element === 0).join('');
            if (index === Number(filtered)) {
                finalArray.push(index);
            }
        }
    }
    return finalArray;
};

//--------------------------------------------------------------------------------

var selfDividingNumbers = function(left, right) {
    let test = Array.from(Array(right + 1).keys()).filter(element => element >= left && !element.toString().includes(0));
    let finalArray = test.filter(element => {
        let splitted = element.toString().split('');
        let filtered = splitted.filter(subEl => element % subEl === 0).join('');
        return element === Number(filtered);
    });
    return finalArray;
};

//--------------------------------------------------------------------------------
//other solution

var selfDividingNumbers = function(left, right) {
    const result = []
    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) { result.push(i) }
    }
    return result
};

//--------------------------------------------------------------------------------
const isSelfDividing = (num) => {
    let result = true
    const originalNumber = num, split = num.toString().split('')
    for (let i = 0; i < split.length; i++) {
        result = result && originalNumber % Number(split[i]) === 0
    }
    return result
}




let left = 1,
    right = 22;

selfDividingNumbers(left, right);
