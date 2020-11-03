/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc. */

function alphabetPosition(text) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';

    let textArray = text.toLowerCase().split('');
    let textPositionArray = [];

    textArray.forEach(letter => {
        if (alphabets.includes(letter)) {
            textPositionArray.push(alphabets.indexOf(letter) + 1);
        }
    });
    let textPosition = textPositionArray.join(' ');
    return textPosition;
}

var text = `The sunset sets at twelve o' clock.`;
alphabetPosition(text);

//other solutions
//--------------------------------------------------------------------------------

function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text
        .toLowerCase()
        .split('')
        .filter(letter => {
            let index = alphabet.indexOf(letter);
            return index > -1;
        })
        .map(letter => alphabet.indexOf(letter) + 1)
        .join(' ');
}

//--------------------------------------------------------------------------------

function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    text = text.split('').map(function(e) {
        return alphabet.indexOf(e.toLowerCase()) + 1;
    });
    text = text.filter(x => x != 0).join(' ');
    return text;
}

//--------------------------------------------------------------------------------

function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map(c => c.charCodeAt() - 64)
        .join(' ');
}
