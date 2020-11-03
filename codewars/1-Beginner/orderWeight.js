function orderWeight(strng) {
    let arrSplitted = strng.split(' ').sort();
    let final = [];
    arrSplitted.forEach(nums => {
        let arrayNums = nums.split('');
        let sum = 0;
        arrayNums.forEach(num => {
            sum += Number(num);
        });
        final.push(sum);
    });
}
orderWeight('56 65 74 100 99 68 86 180 90');
