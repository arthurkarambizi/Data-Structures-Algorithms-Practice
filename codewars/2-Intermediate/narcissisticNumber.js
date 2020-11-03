function narcissistic(value) {
    let valueSplitted = value.toString().split('');
    let valuePowered = valueSplitted.map(num => Math.pow(num, valueSplitted.length));
    let valueTotal = valuePowered.reduce((acc, cur) => acc + cur);
    return valueTotal == value ? true : false;
}
let value = 371;
narcissistic(value);

//--------------------------------------------------------------------------------
// other solution
function narcissistic(value) {
    let numArr = Array.from(value.toString());
    let power = numArr.length;
    let total = 0;
    numArr.forEach(value => {
        total += Math.pow(parseInt(value), power);
    });
    return total === value;
}
