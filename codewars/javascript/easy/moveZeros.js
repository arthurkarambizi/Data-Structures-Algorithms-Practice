/*
 ** Source : https://www.codewars.com/kata/52597aa56021e91c93000cb0
 ** Date   : 11-30-2020
 */

/*
 ** Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 **
 ** moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

/**
 * @param {array} arr
 * @return {arr}
 */
function moveZeros(arr) {
    const zeroArray = [];

    for (let index = 0, arrayLength = arr.length; index < arrayLength; index++) {
        const element = arr[index];
        if (element === 0) {
            zeroArray.push(0);
            arr.splice(index, 1);
            index = index - 1; // reduce index by one when zero is removed
        }
    }

    return [...arr, ...zeroArray];
}

moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]); // [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]); // [1,2,1,1,3,1,0,0,0,0]
