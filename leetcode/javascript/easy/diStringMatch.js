/*
** Source : https://leetcode.com/problems/di-string-match/
** Date   : 10-16-2019
*/

/*
** Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.
**
** Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:
**
** If S[i] == "I", then A[i] < A[i+1]
** If S[i] == "D", then A[i] > A[i+1]
**
**
** Example 1:
**
** Input: "IDID"
** Output: [0,4,1,3,2]
** Example 2:
**
** Input: "III"
** Output: [0,1,2,3]
** Example 3:
**
** Input: "DDI"
** Output: [3,2,0,1]
**
**
** Note:
**
** 1 <= S.length <= 10000
** S only contains characters "I" or "D".
*/

/**
 * @param {string} S
 * @return {number[]}
 */

var diStringMatch = function(S) {
    let decreaseCounter = S.length + 1;
    let increaseCounter = -1;
    let finalResults = [];
    for (let index = 0; index < S.length; index++) {
        const element = S[index];
        if (element === 'I') {
            increaseCounter += 1;
            finalResults.push(increaseCounter);
        } else if (element === 'D') {
            decreaseCounter -= 1;
            finalResults.push(decreaseCounter);
        }
    }

    if (S[S.length - 1] === 'I') {
        increaseCounter += 1;
        finalResults.push(increaseCounter);
    } else if (S[S.length - 1] === 'D') {
        decreaseCounter -= 1;
        finalResults.push(decreaseCounter);
    }
    return finalResults;
};

//--------------------------------------------------------------------------------

var diStringMatch = function(S) {
    let decreaseCounter = S.length + 1;
    let increaseCounter = -1;
    let stringArray = S.split('');
    stringArray[stringArray.length] = stringArray[stringArray.length - 1];

    let finalArray = stringArray.map(element => {
        if (element === 'I') {
            increaseCounter += 1;
            return increaseCounter;
        }
        if (element === 'D') {
            decreaseCounter -= 1;
            return decreaseCounter;
        }
    });
    return finalArray;
};

//--------------------------------------------------------------------------------
// other Solutions

var diStringMatch = function(S) {
    for(var res = [], Is = 0, Ds = S.length, i = 0; i <= S.length; i++)
        if(S[i] === 'I') res.push(Is++)
        else if(S[i] === 'D') res.push(Ds--)
        else res.push(S[S.length - 1] === 'I' ? Is : Ds);
    return res;
};
let S = 'DDI';

diStringMatch(S);
