function toWeirdCase(string) {
    let stringArray = string.split(' ');
    let finalArray = [];

    for (let index = 0; index < stringArray.length; index++) {
        const subString = stringArray[index];
        let subStringArray = subString.split('');
        const substringCap = [];

        for (let index = 0; index < subStringArray.length; index++) {
            const letter = subStringArray[index];

            if (index % 2 == 0) {
                substringCap.push(letter.toUpperCase());
            } else {
                substringCap.push(letter);
            }
        }

        finalArray.push(substringCap.join(''));
    }
    return finalArray.join(' ');
}

let string = 'this';

toWeirdCase('This is a test');

//--------------------------------------------------------------------------------
//other solutions
function toWeirdCase(string) {
    return string
        .split(' ')
        .map(function(word) {
            return word
                .split('')
                .map(function(v, i) {
                    return i % 2 == 0 ? v.toUpperCase() : v;
                })
                .join('');
        })
        .join(' ');
}

//--------------------------------------------------------------------------------
