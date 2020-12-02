function thirt(n) {
    let sequence = [1, 10, 9, 12, 3, 4];
    let nArr = String(n)
        .split('')
        .reverse();
    let sum = 0;
    for (let index = 0; index < nArr.length; index++) {
        if (index < sequence.length) {
            const num = Number(nArr[index]);
            sum += num * sequence[index];
        } else {
            const num = Number(nArr[index]);
            sum += num * 1;
        }
    }

    let sumArr = String(sum)
        .split('')
        .reverse();
    let newSum = 0;
    let key = 1;

    for (let index = 0; index < sumArr.length; index++) {
        if (index < sequence.length) {
            const num = Number(sumArr[index]);
            newSum += num * sequence[index];
        } else {
            const num = Number(nArr[index]);
            newSum += num * sequence[key];
        }
    }
    return newSum;
}

let n = 85299258;

thirt(n);