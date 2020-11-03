/* In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
 */

function permutations(string) {
    let result = [];
    let inputArr = string.split('');

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    };

    permute(inputArr);
    let finalRes = [];

    result.forEach(element => {
        finalRes.push(element.join(''));
    });

    let res = [...new Set(finalRes)];
    return res;
}

let str = 'aabb';

permutations(str);

//--------------------------------------------------------------------------------
// other solutions
var result;

function permutations(string) {
    result = new Set();
    var chars = string.split('');
    permutationHelper(chars, 0);
    return [...result];
}


function permutationHelper(chars, index) {
    if (chars.length === index + 1) {
        result.add(chars.join(''));
        return;
    }
    for (let i = 0; i < chars.length - index; i++) {
        swap(chars, index, index + i);
        permutationHelper(chars, index + 1);
        swap(chars, index, index + i);
    }
}

function swap(chars, a, b) {
    let tmp = chars[a];
    chars[a] = chars[b];
    chars[b] = tmp;
}

function permutations(string) {
    var pp = [];
    pp.add = function(s) {
        if (this.indexOf(s) < 0) this.push(s);
    };

    var perm = function(head, tail) {
        if (tail.length == 1) return pp.add(head + tail);
        for (var t = 0; t < tail.length; t++) {
            perm(head + tail[t], tail.slice(0, t) + tail.slice(t + 1));
        }
    };
    perm('', string);

    return pp;
}
