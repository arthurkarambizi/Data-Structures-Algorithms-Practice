/* You are given a string s. Every letter in s appears once.

Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)

Example
For s = "abc", the result should be "bac". The permutations in order are: "abc", "acb", "bac", "bca", "cab", "cba" So, The middle term is "bac".

Input/Output
[input] string s

unique letters (2 <= length <= 26)

[output] a string

middle permutation. */

function middlePermutation(s) {
    let result = [];
    let inputArr = s.split('').sort();

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m.join(''));
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    };

    permute(inputArr);

    let middleIndex = result.length / 2 - 1;
    let middleRes = result[middleIndex];
    return middleRes;
}
let str = 'abcdxgz';
let ss = 'dczxgba';

// var inputArray = [1, 2, 3];
middlePermutation(str);

//--------------------------------------------------------------------------------
//other solutions

function middlePermutation(s) {
    if (s.length == 1) return s;
    s = s
        .split('')
        .sort()
        .join('');
    var index = s.length;
    var startStr = s.charAt(Math.floor((index - 1) / 2));
    if (index % 2 == 0) {
        var notIncluded = Math.floor((index - 1) / 2);
        for (let i = index - 1; i >= 0; i--) {
            i;
            if (i != notIncluded) startStr += s.charAt(i);
        }
    } else {
        var notIncluded = Math.floor((index - 1) / 2 - 1);
        startStr += s.charAt(notIncluded);
        for (let i = index - 1; i >= 0; i--) {
            if (
                i != notIncluded &&
                i != index &&
                i != Math.floor((index - 1) / 2)
            )
                startStr += s.charAt(i);
        }
    }
    return startStr;
}
