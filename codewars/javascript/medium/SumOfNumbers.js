/* We have an array A of integers, and an array queries of queries.

For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].  Then, the answer to the i-th query is the sum of the even values of A.

(Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)

Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

Example 1:

Input: A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
Output: [8,6,2,4]
Explanation:
At the beginning, the array is [1,2,3,4].
After adding 1 to A[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
After adding -3 to A[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
After adding -4 to A[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
After adding 2 to A[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
1 <= queries.length <= 10000
-10000 <= queries[i][0] <= 10000
0 <= queries[i][1] < A.length */

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
    let response = [];

    function add(myArray, queriesIndex) {
        let newChanges = myArray.map((element, index) => {
            if (index === queries[queriesIndex][1]) {
                return (element = element + queries[queriesIndex][0]);
            } else {
                return element;
            }
        });

        const evenTotal = newChanges
            .filter(element => {
                return element % 2 === 0;
            })
            .reduce((sum, product) => {
                return sum + product;
            }, 0);
        queriesIndex++;
        response.push(evenTotal);
        if (queriesIndex <= queries.length - 1) {
            add(newChanges, queriesIndex);
        }
    }
    add(A, 0);
    return response;
};

let A = [1, 2, 3, 4];
let queries = [
    [1, 0],
    [-3, 1],
    [-4, 0],
    [2, 3]
];

sumEvenAfterQueries(A, queries);

//--------------------------------------------------------------------------------
//other solutions

var sumEvenAfterQueries = function(A, queries) {
    //a place store our even totals...
    let evens = [];

    //first we figure out our current evens total
    let total = 0;
    for (let i = 0; i < A.length; i++) {
        if (isEven(A[i])) total += A[i];
    }

    //then we do our calculations and update our total in one pass
    for (let i = 0; i < queries.length; i++) {

        let iter = queries[i][1];
        //lets keep track of the orginal value before we modify it
        let original = A[iter];

        A[iter] += parseInt(queries[i][0]);
        /*if our original number was even and our new number is even, we need to subtract our original
          and add in our new value
        */
        if (isEven(original) && isEven(A[iter])) {
            total -= original;
            total += A[iter];
        }
        /*if our original number was never even and our new number is even, we need to
          add in our new value
        */
        if (!isEven(original) && isEven(A[iter])) {
            total += A[iter];
        }
        /*if our original number was even and our new number is not even, we need to
          subtract our original value
        */
        if (isEven(original) && !isEven(A[iter])) {
            total -= original;
        }
        //add updated total to array
        evens.push(total);
    }

    return evens;
};
//simple function to check if number is even
var isEven = (x) => {
    return x % 2 === 0;
}