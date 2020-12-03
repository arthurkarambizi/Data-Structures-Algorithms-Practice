/*
 ** Source : https://www.codewars.com/kata/55c6126177c9441a570000cc
 ** Date   : 11-30-2020
 */

/*
 ** My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
 **
 ** I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the weightSum of its digits.
 **
 ** For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
 **
 ** Example:
 ** "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"
 **
 ** When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.
 **
 ** All numbers in the list are positive numbers and the list can be empty.
 **
 ** Notes
 ** it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
 ** Don't modify the input
 ** For C: The result is freed.
 */

/**
 * @param {string} strng
 * @return {string}
 */
function orderWeight(strng) {
    const orderWeightArray = [];
    const stringArray = strng.split(' ');

    for (let index = 0; index < stringArray.length; index++) {
        const weight = stringArray[index];
        const weightSum = [...weight].reduce((a, b) => Number(a) + Number(b), 0);
        orderWeightArray.push({ weight, weightSum });
    }

    //compare the weightSum of the weight
    orderWeightArray.sort((person, personNext) => {
        if (person.weightSum === personNext.weightSum) return person.weight < personNext.weight ? -1 : 1; // if they have the same weight compare by alphabetical order
        return Number(person.weightSum) - Number(personNext.weightSum);
    });

    const output = orderWeightArray.map((person) => person.weight).join(' '); // join array to return a string

    return output;
}

orderWeight('56 65 74 100 99 68 86 180 90'); // "100 180 90 56 65 74 68 86 99"
orderWeight('103 123 4444 99 2000'); // "2000 103 123 4444 99"
orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'); // "11 11 2000 10003 22 123 1234000 44444444 9999"
