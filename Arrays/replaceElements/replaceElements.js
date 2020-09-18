/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
	let maximum = 0;
	// loop the array from the last the element
    for (let index = arr.length - 1; index >= 0; index--) {
        const element = arr[index]; // store arr[index] in element before arr[index] = maximum
        if (index < arr.length - 2) {
            arr[index] = maximum;
		}
        maximum = element > maximum ? element : maximum; // increase the maximum if element is greater than the previous maximum
	}
	//change the last two elements of the array
    arr[arr.length - 2] = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
	return arr;
};

//not fast
// var replaceElements = function (arr) {
//     for (let index = 0; index < arr.length; index++) {
//         let remainingSortedArray = arr.slice(index + 1, arr.length).sort((a, b) => b - a);
//         arr[index] = remainingSortedArray.length > 0 ? remainingSortedArray[0] : -1;
//     }
//     return arr;
// };

let arr = [17, 18, 5, 4, 6, 1]; //Output: [18,6,6,6,1,-1]
replaceElements(arr);
