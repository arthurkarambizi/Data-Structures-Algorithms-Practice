/*
** Source : https://leetcode.com/problems/find-common-characters/
** Date   : 10-16-2019
*/

/*
** Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
**
** You may return the answer in any order.
**
**
**
** Example 1:
**
** Input: ["bella","label","roller"]
** Output: ["e","l","l"]
** Example 2:
**
** Input: ["cool","lock","cook"]
** Output: ["c","o"]
**
**
** Note:
**
** 1 <= A.length <= 100
** 1 <= A[i].length <= 100
** A[i][j] is a lowercase letter
*/

/**
 * @param {string[]} A
 * @return {string[]}
 */

//slow ;

//TODO:
// compare the first string in A  with other strings
// if a letter in First string A[0] is found in other Strings
// remove that letter from that index to avoid duplicates error with newAString.splice(strIndex, 1)

var commonChars = function(A) {
    let checkedString = A;
    let finalArr = [];
    let firstString = A[0];
    let foundInAll = true;

    for (let index = 0; index < firstString.length; index++) {
        const subString = firstString[index];

        for (let index = 1; index < checkedString.length; index++) {
            const aString = checkedString[index];
            let strIndex = [...aString].findIndex(substr => substr === subString);

            if (strIndex > -1) {
                foundInAll = true;
                let newAString = [...aString];
                newAString.splice(strIndex, 1);
                checkedString[index] = newAString.join('');
            } else {
                foundInAll = false;
                break;
            }
        }

        if (foundInAll) {
            finalArr.push(subString);
        }
    }
    return finalArr;
};

//--------------------------------------------------------------------------------
var commonChars = function(A) {
    let SortA = A.sort((a, b) => a.length < b.length);
    let [firstElement, ...restOfArray] = SortA;
    let finalArr = [];
    for (let index = 0; index < firstElement.length; index++) {
        const letter = firstElement[index];

        let lettercheck = restOfArray.every((word, index) => {
            let test = word.includes(letter);
            if (test) {
                let newAString = [...restOfArray[index]];
                let strIndex = newAString.findIndex(substr => substr === letter);
                newAString.splice(strIndex, 1);
                restOfArray[index] = newAString.join('');
                return test;
            }
        });

        if (lettercheck) {
            finalArr.push(letter);
        }
    }
    return finalArr;
};

//--------------------------------------------------------------------------------
var commonChars = function(A) {
    let SortA = A.sort((a, b) => a.length < b.length);
    let [firstElement, ...restOfArray] = SortA;
    let firstElementArr = firstElement.split('');

    let finalArr = firstElementArr.filter(letter => {
        let lettercheck = letterCheckerInString(letter, restOfArray);
        if (lettercheck) {
            return letter;
        }
    });
    return finalArr;
};

const letterCheckerInString = (letter, checkedArray) => {
    let lettercheck = checkedArray.every((word, index) => {
        let test = word.includes(letter);
        if (test) {
            let newAString = [...checkedArray[index]];
            let strIndex = newAString.findIndex(substr => substr === letter);
            newAString.splice(strIndex, 1);
            checkedArray[index] = newAString.join('');
            return test;
        }
    });
    return lettercheck;
};

let A = ['bbddaabc', 'bacdbbaa', 'dbbddcdc', 'ddaddacd', 'cbbacbcc', 'acabdadb', 'cadcaacb', 'dbcacbbd'];

commonChars(A);
