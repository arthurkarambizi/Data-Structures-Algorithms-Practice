/* In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! = "15511210043330985984000000" as a string. */

function factorial(n) {
    let arrayLength = new Array(n).fill();
    let sum = 1;
    for (let index = arrayLength.length; index >= 1; index--) {
        sum = index * sum;
    }
    return sum.toString();
}
factorial(20);

//--------------------------------------------------------------------------------
//other solutions
function factorial(n) {
    var res = [1];
    for (var i = 2; i <= n; ++i) {
        var c = 0;
        for (var j = 0; j < res.length || c !== 0; ++j) {
            c += (res[j] || 0) * i;
            res[j] = c % 10;
            c = Math.floor(c / 10);
        }
    }
    return res.reverse().join('');
}

//--------------------------------------------------------------------------------

function factorial(n) {
    let fact = 1;
    function add(str1, str2) {
        let sum = ''; // our result will be stored in a string.

        // we'll need these in the program many times.
        let str1Length = str1.length;
        let str2Length = str2.length;

        // if s2 is longer than s1, swap them.
        if (str2Length > str1Length) {
            let temp = str2;
            str2 = str1;
            str1 = temp;
        }

        let carry = 0; // number that is carried to next decimal place, initially zero.
        let a;
        let b;
        let temp;
        let digitSum;
        for (let i = 0; i < str1.length; i++) {
            a = parseInt(str1.charAt(str1.length - 1 - i)); // get ith digit of str1 from right, we store it in a
            b = parseInt(str2.charAt(str2.length - 1 - i)); // get ith digit of str2 from right, we store it in b
            b = b ? b : 0; // make sure b is a number, (this is useful in case, str2 is shorter than str1
            temp = (carry + a + b).toString(); // add a and b along with carry, store it in a temp string.
            digitSum = temp.charAt(temp.length - 1); //
            carry = parseInt(temp.substr(0, temp.length - 1)); // split the string into carry and digitSum ( least significant digit of abSum.
            carry = carry ? carry : 0; // if carry is not number, make it zero.

            sum = i === str1.length - 1 ? temp + sum : digitSum + sum; // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.
        }

        return sum; // return sum
    }

    for (let i = 2; i <= n; i++) {
        if (Number.isSafeInteger(fact * i)) {
            fact = fact * i;
        } else {
            //fact = fact + fact + .. i times
            let factxi = '0'; // this is (fact * i) for us.
            for (let j = 0; j < i; j++) {
                factxi = add(factxi, fact.toString());
            }
            fact = factxi; // update value of fact before continuing the loop.
        }
    }
    return fact;
}

factorial(20);
factorial(25);
