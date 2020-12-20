/*
 ** Source : https://www.codewars.com/kata/5270d0d18625160ada0000e4
 ** Date   : 12-19-2020
 */

/**
 * @param {array} dice
 * @return {number}
 */
function score(dice) {
    const ones = { 1: 100, 5: 50 };
    const threes = { 1: 1000, 2: 200, 3: 300, 4: 400, 5: 500, 6: 600 };
    const checkObject = {}; // ex: {1:3, 2:1, 3:1}
    let output = 0;

    for (let index = 0; index < dice.length; index++) {
        const roll = dice[index];

        if (roll in checkObject) {
            checkObject[roll] += 1;
        } else {
            checkObject[roll] = 1;
        }
    }

    for (const roll in checkObject) {
        // if it's  not 1 or 5 and has 3 or more times
        if (!(roll in ones) && checkObject[roll] >= 3) {
            output += threes[roll];
        }

        // if it's 1 or 5
        if (roll in ones) {
            let times = checkObject[roll] % 3;
            if (checkObject[roll] < 3) {
                output += ones[roll] * times;
            } else {
                output += threes[roll] + ones[roll] * times;
            }
        }
    }

    return output;
}
score([1, 1, 1, 1, 3]);
score([2, 3, 4, 6, 2]); // 0
score([4, 4, 4, 3, 3]); //400
score([2, 4, 4, 5, 4]); // 450
score([3, 3, 3, 3, 3]); // 300
