//TODO:refactor

/* Complete the
function scramble(str1, str2) that returns true
if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

    Only lower
case str1Letters will be used(a - z).No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') == > True
scramble('cedewaraaossoqqyt', 'codewars') == > True
scramble('katas', 'steak') == > False */

//--------------------------------------------------------------------------------
function scramble(str1, str2) {
    let st2Arr = str2.split('');
    let res = st2Arr.filter(element => {
        return str1.includes(element);
    });
    let resultWord = res.join('');
    return resultWord === str2 ? true : false;
}

let str1 = 'rkqodlw';
let str2 = 'world';

//--------------------------------------------------------------------------------

function scramble(str1, str2) {
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');
    let finalArray = [];

    str2Arr.forEach(str2Letter => {
        let checkStringIndex = str1Arr.indexOf(str2Letter);
        if (checkStringIndex !== -1 ) {
            finalArray.push(str2Letter);
            str1Arr.splice(checkStringIndex, 1);//remove the string checked in str1 to not comeback
        }
    });
    return finalArray.join('') === str2 ? true : false;
}

//--------------------------------------------------------------------------------


function scramble(str1, str2) {
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');
    let check = true;
    for (let index = 0; index < str2Arr.length; index++) {
        let checkStringIndex = str1Arr.indexOf(str2Arr[index]);
        str1Arr.splice(checkStringIndex, 1); //remove the string checked in str1 to not comeback

        if (checkStringIndex === -1) {
            check = false;
            break;
        }
    }
    return check;
}
let str1 = 'cedearaaossoqqyt';
let str2 = 'codewars';

scramble(str1, str2);

//--------------------------------------------------------------------------------
// Other solutions

function scramble(strToBeChecked, strToCheckFor) {
    let numLetters = {}

    for (const letter of strToCheckFor) {
      if (numLetters[letter]) numLetters[letter]++
      else numLetters[letter] = 1
    }

    for (const letter of strToBeChecked) {
      if (numLetters[letter] && numLetters[letter] !== 0) numLetters[letter]--
    }

    for (const key in numLetters) {
      if (numLetters[key] !== 0) return false
    }

    // Only reaches this far if all good
    return true
  }
