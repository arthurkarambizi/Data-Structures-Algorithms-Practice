/*
 ** Source : https://www.codewars.com/kata/56606694ec01347ce800001b
 ** Date   : 12-8-2020
 */

/*
 ** Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.
 **
 ** (In this case, all triangles must have surface greater than 0 to be accepted).
 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {boolean}
 */
function isTriangle(a, b, c) {
    const firstCase = a + b > c;
    const secondCase = c + a > b;
    const thirdCase = b + c > a;

    return firstCase && secondCase && thirdCase;
}

isTriangle(7, 5, 10); // true
