/*
** Source : https://leetcode.com/problems/distribute-candies-to-people/
** Date   : 10-16-2019
*/

/*
** We distribute some number of candies, to a row of n = num_people people in the following way:
**
** We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.
**
** Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.
**
** This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).
**
** Return an array (of length num_people and sum candies) that represents the final distribution of candies.
**
**
**
** Example 1:
**
** Input: candies = 7, num_people = 4
** Output: [1,2,3,1]
** Explanation:
** On the first turn, ans[0] += 1, and the array is [1,0,0,0].
** On the second turn, ans[1] += 2, and the array is [1,2,0,0].
** On the third turn, ans[2] += 3, and the array is [1,2,3,0].
** On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].
** Example 2:
**
** Input: candies = 10, num_people = 3
** Output: [5,2,3]
** Explanation:
** On the first turn, ans[0] += 1, and the array is [1,0,0].
** On the second turn, ans[1] += 2, and the array is [1,2,0].
** On the third turn, ans[2] += 3, and the array is [1,2,3].
** On the fourth turn, ans[0] += 4, and the final array is [5,2,3].
**
**
** Constraints:
**
** 1 <= candies <= 10^9
** 1 <= num_people <= 1000
**
*/

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let firstRound = [];
    let remainingCandies = candies;
    let sharedCandiesPerPerson = 0;
    let totalGivenCandies = 0;

    //first give a candy for every person
    for (let index = 0; index < num_people; index++) {
        // remainingCandies = candies - totalGivenCandies;
        sharedCandiesPerPerson++;

        if (remainingCandies > 1) {
            firstRound[index] = sharedCandiesPerPerson;
            totalGivenCandies += sharedCandiesPerPerson;
        } else {
            if (remainingCandies >= 1) {
                firstRound[index] = 1;
                totalGivenCandies += 1;
            } else {
                firstRound[index] = 0;
            }
        }

        remainingCandies = candies - totalGivenCandies;
    }
    // remainingCandies = 10;

    while (remainingCandies > 0) {
        for (let index = 0; index < firstRound.length; index++) {
            let givenPerPerson = num_people + index + 1;
            remainingCandies = remainingCandies - 1;

            if (totalGivenCandies> candies) {
                totalGivenCandies += givenPerPerson;
                firstRound[index] += givenPerPerson;
            } else {
                firstRound[index] += candies - totalGivenCandies;
                console.log(firstRound[index])
                return firstRound;
            }
        }
    }
    return firstRound;
};

// let candies = 12,
//     num_people = 4;
let candies = 11,
    num_people = 3;
distributeCandies(candies, num_people);
