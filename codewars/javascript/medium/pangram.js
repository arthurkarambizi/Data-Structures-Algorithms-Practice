/* A pangram is a sentence that contains every single letter of the alphabet at least once.For example, the sentence "The quick brown fox jumps over the lazy dog"
is a pangram, because it uses the letters A - Z at least once(
    case is irrelevant).

Given a string, detect whether or not it is a pangram.Return True
if it is, False
if not.Ignore numbers and punctuation.
 */
function isPangram(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetSorted = alphabet
        .toLowerCase()
        .split('')
        .sort();
    let stringSorted = string
        .toLowerCase()
        .split('')
        .sort();
    let stringSortedNoRepeat = stringSorted.filter((value, index, array) => {
        return array.indexOf(value) == index;
    });

    if (stringSortedNoRepeat.join('').includes(alphabetSorted.join(''))) {
        return true;
    } else {
        return false;
    }
}
let string = 'The quick brown fox jumps over the lazy dog.';
isPangram(string);

//--------------------------------------------------------------------------------
//other solutions

function isPangram(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
        return string.indexOf(x) !== -1;
    });
}

//--------------------------------------------------------------------------------
function isPangram(string) {
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

//--------------------------------------------------------------------------------
function isPangram(string) {
    return "abcdefghijklmnopqrstuvwxyz".split('').every(function (e) {
        return string.toLowerCase().indexOf(e) >= 0;
    });
}
