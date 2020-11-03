const reverseString = string => {
    let stringArray = string.split('');
    let reversedStringArray = [];
    for (let index = stringArray.length - 1; index >= 0; index--) {
        const element = stringArray[index];
        reversedStringArray.push(element);
    }
    return reversedStringArray.join('');
};

let string = 'hello my name';
reverseString(string);
