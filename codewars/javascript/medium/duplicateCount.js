/*
 ** Source : https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
 ** Date   : 12-8-2020
 */

/*
 ** Count the number of Duplicates
 ** Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 **
 ** Example
 ** "abcde" -> 0 # no characters repeats more than once
 ** "aabbcde" -> 2 # 'a' and 'b'
 ** "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 ** "indivisibility" -> 1 # 'i' occurs six times
 ** "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 ** "aA11" -> 2 # 'a' and '1'
 ** "ABBA" -> 2 # 'A' and 'B' each occur twice
 */

/**
 * @param {sting} text
 * @return {number}
 */
function duplicateCount(text) {
    const countObject = {};
    let output = 0;

    for (let index = 0; index < text.length; index++) {
        const letter = text[index].toLowerCase();

        if (letter in countObject) {
            countObject[letter] += 1;
        } else {
            countObject[letter] = 1;
        }
    }

    for (letter in countObject) {
        if (countObject[letter] > 1) {
            output += 1;
        }
    }

    return output;
}

duplicateCount(''); // 0
duplicateCount('abcde'); // 0
duplicateCount('aabbcde'); // 2
duplicateCount('aabBcde'); // 2
duplicateCount('Indivisibility'); // 1
duplicateCount('Indivisibilities'); // 2
