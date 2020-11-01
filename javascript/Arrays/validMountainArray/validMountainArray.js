/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
    const mountain = { increase: false, decrease: false };
    if (A.length >= 3) {
        for (let index = 0; index < A.length; index++) {
            const element = A[index];

            if (element < A[index + 1]) mountain['increase'] = true; // when mountain increase
            if (element > A[index + 1]) mountain['decrease'] = true; // when mountain decrase

            if (mountain['decrease'] && element < A[index + 1]) return false; //if mountain decrease and increase return
            if (element === A[index + 1]) return false; //if mountain is flat return false
        }

        // if mountain strictly increase and strictly decrease
        if (mountain['increase'] && mountain['decrease']) {
            return true;
        }
    }

    return false;
};

// let A = [2,1] // Output: false
// let A = [3, 5, 3]; // Output: false
// let A = [0, 3, 2, 1]; //Output: true
let A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //  Output: false
validMountainArray(A);
