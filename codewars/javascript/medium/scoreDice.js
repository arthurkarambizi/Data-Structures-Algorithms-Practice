function score(dice) {
    let arr = new Set(dice);
    let sum = 0;
    let others = {
        2: 200,
        3: 300,
        4: 400,
        6: 600
    };
    let otherValues = Object.values(others);
    let otherKeys = Object.keys(others);
    arr.forEach(num => {
        let chooseRes = dice.filter(element => element === num);
        if (num === 1 || num === 5) {
            if (chooseRes.length === 3) {
                sum += num === 1 ? 1000 : 500;
            } else if (chooseRes.length > 3) {
                let rest = chooseRes.length - 3;
                if (num === 1) {
                    let sumOne = 100 * rest;
                    sum += 1000 + sumOne;
                } else {
                    let sumOne = 50 * rest;
                    sum += 500 + sumOne;
                }
            } else {
                sum +=
                    num === 1 ? 100 * chooseRes.length : 50 * chooseRes.length;
            }
        } else {
            if (chooseRes.length >= 3) {
                otherKeys.forEach((element, index) => {
                    if (element == num) {
                        sum += otherValues[index];
                    }
                });
            }
        }
    });
    return sum;
}
score([1, 1, 1, 1, 3]);

//--------------------------------------------------------------------------------
// other Solutions
function score(dice) {
    var number = [0, 0, 0, 0, 0, 0],
        points = [
            { three: 1000, one: 100 },
            { three: 200, one: 0 },
            { three: 300, one: 0 },
            { three: 400, one: 0 },
            { three: 500, one: 50 },
            { three: 600, one: 0 }
        ],
        total = 0;
    // calculate amountn of numbers
    for (var i = 0; i < dice.length; i++) {
        number[dice[i] - 1]++;
    }
    var ones, threes;
    for (i = 0; i < number.length; i++) {
        ones = number[i] % 3;
        threes = number[i] > 2 ? 1 : 0;
        total += points[i].three * threes + points[i].one * ones;
    }
    return total;
}

score([1, 1, 1, 1, 3])(2);
