/**
 * @param {number[]} arr
 * @return {boolean}
 */

var checkIfExist = function (arr) {
    let zeroCount = 0; // count 0 in arr
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element === 0) zeroCount++;
        let double = element * 2;
        if (zeroCount > 1 || (element !== 0 && arr.includes(double))) return true; //return true when there are more than one zero because 0*2 = 0;
    }

    return false;
};

// var checkIfExist = function (arr) {
//     let checkObject = {};
//     let zeroCount = 0; // count 0 in arr
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if (element === 0) zeroCount++;
//         checkObject[element] = element;
//         if (zeroCount > 1) return true; //return true when there are more than one zero because 0*2 = 0;
//     }

//     for (let index = 0; index < arr.length; index++) {
//         const double = arr[index] * 2;
//         if (checkObject[double]) return true;
// 	}

//     return false;
// };


// let arr = [0, 0]; //output: true /0*2 = 0
// let arr = [10, 2, 5, 3]; //output: true /5*2 = 10
let arr = [-2, 0, 10, -19, 4, 6, -8]; // //output: false

checkIfExist(arr);
