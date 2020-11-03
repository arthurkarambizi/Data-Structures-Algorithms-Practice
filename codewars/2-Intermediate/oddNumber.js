/* Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times. */

function findOdd(A) {
    let oddCountedNumber;
    let countedNumbers = A.reduce(function(allNumbers, number) {
        if (number in allNumbers) {
            allNumbers[number]++;
        } else {
            allNumbers[number] = 1;
        }
        return allNumbers;
    }, {});

    countedNumbersValues = Object.values(countedNumbers);
    countedNumbersKeys = Object.keys(countedNumbers);

    countedNumbersValues.forEach((value, index) => {
        if (value % 2 === 1) {
            oddCountedNumber = Number(countedNumbersKeys[index]);
        }
    });
    return oddCountedNumber;
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);

//--------------------------------------------------------------------------------
//other solutions

function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2);
}

//--------------------------------------------------------------------------------
const findOdd = xs => xs.reduce((a, b) => a ^ b);
