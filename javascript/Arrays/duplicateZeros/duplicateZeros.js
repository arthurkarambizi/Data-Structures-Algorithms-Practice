/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let arrCopy = [...arr];
    let count = 0;
    for (let index = 0; index < arrCopy.length; index++) {
        const element = arrCopy[index];
        if (element === 0) {
            arr.splice(count + 1, 0, 0); //count + 1: index to insert new element,0:remove 0 element in arr array, 0: add new element 0 in arr array
            count += 2; // increase the index count by 2 when new 0 is added
            arr.length = arrCopy.length; //reset the arr length
        } else {
            count++;
		}
	}
};
let arr = [0, 1, 7, 6, 0, 2, 0, 7]; //[0,0,1,7,6,0,0,2]
// let arr = [1, 0, 2, 3, 0, 4, 5, 0]; //[1,0,0,2,3,0,0,4]
duplicateZeros(arr);
