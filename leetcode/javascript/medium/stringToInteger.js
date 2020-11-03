/*
** Source : https://leetcode.com/problems/string-to-integer-atoi/
** Date   : 11-01-2020
*/

/*
** Implement atoi which converts a string to an integer.
**
** The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
**
** The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
**
** If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
**
** If no valid conversion could be performed, a zero value is returned.
**
** Note:
**
** Only the space character ' ' is considered as whitespace character.
** Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
** Example 1:
**
** Input: "42"
** Output: 42
** Example 2:
**
** Input: "   -42"
** Output: -42
** Explanation: The first non-whitespace character is '-', which is the minus sign.
**              Then take as many numerical digits as possible, which gets 42.
** Example 3:
**
** Input: "4193 with words"
** Output: 4193
** Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
** Example 4:
**
** Input: "words and 987"
** Output: 0
** Explanation: The first non-whitespace character is 'w', which is not a numerical
**              digit or a +/- sign. Therefore no valid conversion could be performed.
** Example 5:
**
** Input: "-91283472332"
** Output: -2147483648
** Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
**              Thefore INT_MIN (−231) is returned.
*/

/**
 * @param {string} str
 * @return {number}
 */

// TODO:
// 1. have a range of number the string can't exceed
//  if  exceeded return the closest range
//2. the string may start with a sign (+ or -) ,white space or a number
//if it meets all the criterias return the number
//if it starts with a word return 0

var myAtoi = function(str) {
    let removeWhiteSpaces = str.split(' ').filter(element => element !== '')[0];
    //if removeWhiteSpaces str is not empty
    //ex:str='+321+ 34' , removeWhiteSpaces='+321+'
    if (removeWhiteSpaces) {
        //change removeWhiteSpaces in an array
        let checkString = removeWhiteSpaces.split('');

        let finalNumber = [];
        for (let index = 0; index < checkString.length; index++) {
            const element = checkString[index];
            let checkElementSign = checkString[0] === '+' || checkString[0] === '-';
            //check if the string starts with a sign (+,-) or a number else return 0
            if (checkElementSign || Number(checkString[0]) || checkString[0] === '0') {
                //check each element, add the element in finalNumber array if it's a number
                //if it's not a number stop the loop
                if ((index === 0 && checkElementSign) || Number(element) || element === '0') {
                    finalNumber.push(element);
                } else {
                    break;
                }
            } else {
                return 0;
            }
        }
        let results = finalNumber.join('');
        // pass the results in numberChecker function to return the converted string to an integer
        return Number(numberChecker(results));
    } else {
        return 0;
    }
};

const numberChecker = number => {
    let range = [Math.pow(-2, 31), Math.pow(2, 31)];
    //if the result passed is a number
    //else if result === ( + || -) return 0
    if (Number(number)) {
        if (Number(number) < range[0]) {
            return range[0];
        } else if (Number(number) >= range[1]) {
            return range[1] - 1;
        } else {
            return number;
        }
    } else {
        return 0;
    }
};


let myString = '+321+';
myAtoi(myString);
