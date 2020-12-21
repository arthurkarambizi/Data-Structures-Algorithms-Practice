/*
 ** Source : https://www.codewars.com/kata/545cedaa9943f7fe7b000048
 ** Date   : 12-17-2020
 */

/*
 ** A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
 **
 ** Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

/**
 * @param {string} string
 * @return {boolean}
 * O(n)
 */
function isPangram(string) {
    const stringLowerCase = string.toLowerCase();
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsCounter = {}; // ex: {a:3, b:1, c:6 }

    let isPangram = true;

    //set count of each alphabet in alphabetsCounter to 0
    for (let index = 0; index < alphabets.length; index++) {
        const letter = alphabets[index];
        alphabetsCounter[letter] = 0;
    }

    // add count of each alphabet in stringLowerCase to alphabetsCounter
    for (let index = 0; index < stringLowerCase.length; index++) {
        const letter = stringLowerCase[index];

        if (letter in alphabetsCounter) {
            alphabetsCounter[letter] += 1;
        }
    }

    // check if the count of each alphabet in alphabetsCounter is not 0
    for (const letter in alphabetsCounter) {
        if (alphabetsCounter[letter] === 0) {
            isPangram = false;
            break;
        }
    }

    return isPangram;
}

/**
 * @param {string} string
 * @return {boolean}
 * O(nlogn)
 */
function isPangramTwo(string) {
    // create a sorted string with no duplicates compare it to the alphabets
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';

    const stringJoined = string.replace(/[^a-zA-Z]+/g, '').toLowerCase(); // return only alphabets
    const stringNoDuplicates = new Set([...stringJoined]);
    const newString = [...stringNoDuplicates].sort().join('');

    return newString === alphabets;
}

isPangram('The quick brown fox jumps over the lazy dog.'); // true
isPangram('Pack my box with five dozen liquor jugs.'); // true

isPangramTwo('The quick brown fox jumps over the lazy dog.');
