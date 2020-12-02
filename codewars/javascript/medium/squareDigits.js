function squareDigits(num) {
    let numArray = String(num).split('');
    let numSquared = numArray.map(element => element * element);
    let numJoined = numSquared.join('');
    return Number(numJoined);
}

let num = 9119;

squareDigits(num);
