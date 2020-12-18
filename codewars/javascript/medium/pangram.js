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
 */
function isPangram(string) {
    const alphabets = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 };
    const stringLowerCase = string.toLowerCase();
    let output = true;

    for (let index = 0; index < stringLowerCase.length; index++) {
        const letter = stringLowerCase[index];

        if (letter in alphabets) {
            alphabets[letter] += 1;
        }
    }

    for (const letter in alphabets) {
        if (alphabets[letter] === 0) {
            output = false;
            break;
        }
    }

    return output;
}

isPangram('The quick brown fox jumps over the lazy dog.'); // true
isPangram('Pack my box with five dozen liquor jugs.'); // true
