//TODO: refactor
/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

var moveZeros = function(arr) {
    let arr1 = [];
    let arrZero = [];
    arr.forEach(element => {
        if (element !== 0) {
            arr1.push(element);
        } else {
            arrZero.push(element);
        }
    });

    let result = arr1.concat(arrZero);
    return result;
};

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]

//--------------------------------------------------------------------------------------
//other solutions

var moveZeros = function(arr) {
    var filtedList = arr.filter(function(num) {
        return num !== 0;
    });
    var zeroList = arr.filter(function(num) {
        return num === 0;
    });
    return filtedList.concat(zeroList);
};

//--------------------------------------------------------------------------------------
