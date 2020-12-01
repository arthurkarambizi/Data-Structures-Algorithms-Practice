/*
 ** Source : https://www.codewars.com/kata/5168bb5dfe9a00b126000018
 ** Date   : 11-30-2020
 */

/*
** Complete the solution so that it reverses the string passed into it.
**
** 'world'  =>  'dlrow'
*/

 /**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
	let reversedString = '';

    for (let index = str.length - 1; index >= 0; index--) {
        const element = str[index];
        reversedString += element;
	}

    return reversedString;
}

const str = 'hello my name'; // eman ym olleh
reverseString(str);
