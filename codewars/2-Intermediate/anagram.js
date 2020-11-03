/* What is an anagram ? Well, two words are anagrams of each other
if they both contain the same letters.For example:
'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
'abba' & 'abca' == false */

let word = 'abba';
let wordsArray = ['aabb', 'abcd', 'bbaa', 'dada'];

function anagrams(word, wordsArray) {
    let wordSplit = word.split('');
    let wordSorted = wordSplit.sort();
    let wordsArraySorted = [];
    let resultsIndex = [];
    let finalResults = [];

    //sort letters in each array in wordsArray array 'wordsArraySorted'
    wordsArray.forEach(element => {
        let wordsLetters = element.split('');
        let wordsLettersSplited = wordsLetters.sort();
        wordsArraySorted.push(wordsLettersSplited);
    });

    //compare letters in wordSorted with each array in wordsArraySorted
    wordsArraySorted.forEach((test, index) => {
        if (JSON.stringify(wordSorted) === JSON.stringify(test)) {
            resultsIndex.push(index);
        }
    });

    //return results
    resultsIndex.forEach(index => {
        finalResults.push(wordsArray[index]);
    });

    return finalResults;
}

anagrams(word, wordsArray);

//--------------------------------------------------------------------------------

//other Solutions

function anagrams(word, wordsArray) {
    word = word.split('').sort().join('');
    return wordsArray.filter(function (v) {
        return word == v.split('').sort().join('');
    });
}

//--------------------------------------------------------------------------------

function anagrams(word, wordsArray) {
    const sword = [...word].sort().join('');
    return wordsArray.filter(w => [...w].sort().join('') === sword);
}
