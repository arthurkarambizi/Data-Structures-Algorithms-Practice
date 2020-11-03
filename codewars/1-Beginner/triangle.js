/*  Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case. */

const isTriangle = (a, b, c) => {
    const firstCase = a + b;
    const secondCase = c + a;
    const thirdCase = b + c;
    if (firstCase > c && secondCase > b && thirdCase > a) {
        return true;
    }
    return false;
};

isTriangle(7, 5, 10);
