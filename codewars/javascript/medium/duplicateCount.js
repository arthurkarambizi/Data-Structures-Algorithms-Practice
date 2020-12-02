function duplicateCount(text) {
    if (text.length <= 0) {
        return 0;
    }
    let textArr = text.split('');
    let noDuplicates = [...new Set(textArr)];
    let finalArr = noDuplicates.map(letter => {
        let duplicatesArr = textArr.filter(filterLetter => filterLetter == letter);
        if (text.includes(letter.toLowerCase()) && text.includes(letter.toUpperCase())) {
            return 1;
        }
        if (duplicatesArr.length === 1) {
            return 0;
        }
        return duplicatesArr.length;
    });

    let sorted = finalArr.sort((a, b) => a < b);
    return sorted[0];
}
let text = 'abcde';
duplicateCount(text);
