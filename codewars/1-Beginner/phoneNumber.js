function createPhoneNumber(phone) {
    if (phone.length === 10) {
        let firsThree = phone.slice(0, 3).join('');
        let middleThree = phone.slice(3, 6).join('');
        let lastFour = phone.slice(6, 10).join('');
        return `(${firsThree})${middleThree}-${lastFour}`;
    } else {
        return;
    }
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // => returns "(123) 456-7890"
