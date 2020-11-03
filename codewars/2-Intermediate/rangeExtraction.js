function solution(list) {
    let finalArray = [];
    for (let index = 0; index < list.length; index++) {
        let currentNumber = list[index];
        let nextNumber = list[index + 1];
        let previousNumber = list[index - 1];

        let condition = currentNumber + 1 === nextNumber;
        let conditionTwo = currentNumber - 1 === previousNumber;

        if (condition) {
            finalArray.push(currentNumber);
        } else if (conditionTwo) {
            finalArray.push(currentNumber, '');
        } else {
            finalArray.push(currentNumber, '');
        }
    }

    let resultsArray = finalArray.join().split(',,');
    let categoryArrays = [];
    resultsArray.forEach(category => {
        categoryArrays.push([category]);
    });

    let finalisedArray = [];
    categoryArrays.forEach(categoryArray => {
        categoryArray.forEach(element => {
            finalisedArray.push(element.split(','));
        });
    });

    let rangeArray = [];
    finalisedArray.forEach(arr => {
        if (arr.length >= 3) {
            if (!arr[arr.length - 1]) {
                let range = `${arr[0]}-${arr[arr.length - 2]}`;
                if (range.includes('--')) {
                    let rangetest = range.split('--').join();
                    rangeArray.push(rangetest);
                } else {
                    rangeArray.push(range);
                }
            } else {
                let range2 = `${arr[0]}-${arr[arr.length - 1]}`;
                rangeArray.push(range2);
            }
        } else {
            arr.forEach(element => {
                rangeArray.push(element);
            });
        }
    });
    let finalTerm;

    let results = rangeArray.join();
    if (results[results.length - 1] === ',') {
        finalTerm = results.slice(0, results.length - 1);
    } else {
        finalTerm = `${rangeArray.join()}`;
    }
    return `${finalTerm}`;
}

solution([
    -77,
    -74,
    -73,
    -72,
    -70,
    -69,
    -66,
    -64,
    -61,
    -58,
    -56,
    -54,
    -53,
    -52
]);
