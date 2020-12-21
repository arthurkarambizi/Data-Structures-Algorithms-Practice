/*
 ** Source : https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
 ** Date   : 12-18-2020
 */

/*
 ** A format for expressing an ordered list of integers is to use a comma separated list of either
 **
 ** individual integers
 ** or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
 ** Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
 **
 ** Example:
 **
 ** solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
 ** // returns "-6,-3-1,3-5,7-11,14,15,17-20"
 */

/**
 * @param {array} list
 * @return {string}
 *  O(n)
 */
function solution(list) {
    let firstNumberInRange = '';
    let counter = 0; // count consecutive numbers, 3 consecutive numbers to create a range
    const output = [];

    for (let index = 0; index < list.length; index++) {
        const currentNumber = list[index];
        const nextNumber = list[index + 1];
        const isNextNumberInRange = currentNumber + 1 === nextNumber;

        // create the first number of the range
        if (isNextNumberInRange && counter === 0) {
            firstNumberInRange = currentNumber;
            counter = 1;
        }

        // if the next number is not in range and there is no firstNumberInRange, push the the single number (currentNumber)
        if (!isNextNumberInRange && counter === 0) {
            output.push(`${currentNumber}`);
        }

        // if the next number is in range and there is there is firstNumberInRange increment the counter
        if (isNextNumberInRange && counter > 0) {
            counter++;
        }

        // if the next number is not range and there is some consective
        if (!isNextNumberInRange && counter > 0) {
            if (counter >= 3) {
                const range = `${firstNumberInRange}-${currentNumber}`;
                output.push(range);
            } else {
                output.push(`${firstNumberInRange}`, `${currentNumber}`);
            }

            firstNumberInRange = '';
            counter = 0;
        }
    }

    return output.join(',');
}

/**
 * @param {array} list
 * @return {string}
 *  O(n^2)
 */
function solutionTwo(list) {
    /*
     **     list = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]
     **     string = '-6/-3&&-2&&-10&&1/3&&4&&5/7&&8&&9&&10&&11/14&&15/17&&18&&19&&20'
     **     stringArray = [ '-6', '-3&&-2&&-10&&1', '3&&4&&5', '7&&8&&9&&10&&11', '14&&15', '17&&18&&19&&20' ]
     **     ouput = [-6,-3-1, 3-5, 7-11, 14, 15, 17-20]
     */

    let string = '';
    let output = [];

    for (let index = 0; index < list.length; index++) {
        const currentNumber = list[index];
        const nextNumber = list[index + 1];

        if (nextNumber) {
            if (currentNumber + 1 === nextNumber) {
                string += `${currentNumber}&&`;
            } else {
                string += `${currentNumber}/`;
            }
        } else {
            string += `${currentNumber}`; // last element of the array
        }
    }

    const stringArray = string.split('/');

    for (let index = 0; index < stringArray.length; index++) {
        const currentArray = stringArray[index].split('&&');

        if (currentArray.length < 3) {
            output.push(...currentArray);
        } else {
            const firstElement = currentArray[0];
            const lastElement = currentArray[currentArray.length - 1];
            const range = `${firstElement}-${lastElement}`;

            output.push(range);
        }
    }

    return output.join(',');
}

// solution([-77, -74, -73, -72, -70, -69, -66, -64, -61, -58, -56, -54, -53, -52]);
solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]); // returns "-6,-3-1,3-5,7-11,14,15,17-20"
// solutionTwo([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]); // returns "-6,-3-1,3-5,7-11,14,15,17-20"
