/*
 ** Source : https://www.codewars.com/kata/525f50e3b73515a6db000b83
 ** Date   : 11-30-2020
 */

/*
 ** Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 **
 ** Example:
 ** createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 ** The returned format must be correct in order to complete this challenge.
 ** Don't forget the space after the closing parentheses!
 */

/**
 * @param {array} phone
 * @return {string}
 */
function createPhoneNumber(phone) {
    if (phone.length !== 10) return;

    const firsThree = phone.slice(0, 3).join('');
    const middleThree = phone.slice(3, 6).join('');
    const lastFour = phone.slice(6, 10).join('');

    return `(${firsThree}) ${middleThree}-${lastFour}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // => returns "(123) 456-7890"
