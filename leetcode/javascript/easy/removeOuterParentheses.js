/*
** Source : https://leetcode.com/problems/remove-outermost-parentheses/
** Date   : 10-16-2019
*/

/*
** A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
**
** A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.
**
** Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.
**
** Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.
**
** Example 1:
**
** Input: "(()())(())"
** Output: "()()()"
** Explanation:
** The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
** After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
** Example 2:
**
** Input: "(()())(())(()(()))"
** Output: "()()()()(())"
** Explanation:
** The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
** After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
** Example 3:
**
** Input: "()()"
** Output: ""
** Explanation:
** The input string is "()()", with primitive decomposition "()" + "()".
** After removing outer parentheses of each part, this is "" + "" = "".
*/

/**
 * @param {string} S
 * @return {string}
 */

var removeOuterParentheses = function(S) {
    let groupingParentheses = [];
    let slicingStart = -1;
    let count = 0;

    // grouping parentheses that are inside others if count == 0
    for (let index = 0; index < S.length; index++) {
        let parenthese = S[index];
        //increase count when parenthese === '(' else decrease count ')'
        parenthese === '(' ? count++ : count--;

        if (count === 0) {
            let parentheseArr = S.slice(slicingStart + 1, index + 1);
            slicingStart = index;
            groupingParentheses.push(parentheseArr);
        }
    }

    // removing outer parentheses
    let newS = groupingParentheses.map(group => {
        return group.slice(1, group.length - 1);
    });

    let results = newS.join('');
    return results;
};

//--------------------------------------------------------------------------------
//other solution

var removeOuterParentheses = function(S) {
    let res = '';
    let open = 0;
    for (let i = 0; i < S.length; i += 1) {
        const parenthese = S[i];
        if (parenthese === ')') {
            open -= 1;
        }
        if (open > 0) {
            res += parenthese;
        }
        if (parenthese === '(') {
            open += 1;
        }
    }
    return res;
};

let S = '(()())(())';
removeOuterParentheses(S);
