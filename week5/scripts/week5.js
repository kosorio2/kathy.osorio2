//To determine browser support for a feature is to use feature detection which is done using an if statment 

//Example: 
// if (window.holoDeck) {
//     virtualReality.activate();
// } //This makes sure that no errors occur if the method is not supported 

//alert() is the most basic form of debugging. It places breakpoints where the code breaks 
//Example:
function amIOldEnough(age){
    if (age < 12) {
        alert(age);
        console.log('No, sorry.');
    } else if (age < 18) {
        console.log('Only if accompanied by an adult.');
    }
    else {
        console.log('Yes, come on in!');
    }
}

amIOldEnough(21)

//using the throw error 
function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError('You cant find the square root of negative numbers')
    }
    return Math.sqrt(number);
};

console.log(squareRoot(121))
console.log(squareRoot(-1))

//using try, catch and finally 
function imaginarySquareRoot(number) {
    'use strict';
    try {
        return String(squareRoot(number));
    } catch(error) {
        return squareRoot(-number)+'i';
    }
}

// console.log(imagineSquareRoot(-49)) 

//Testing Jest 

function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError("You can't find the square root of negative numbers")
    }
    return Math.sqrt(number);
};

test('square root of 4 is 2', () => {
    expect(squareRoot(4)).toBe(2);
});

function factorsOf(n) {
    const factors = [];
    for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
        if (n%i === 0) {
            factors.push(i, n/i);
        }
    }
    return factors.sort((a, b) => a - b);
}

function isPrime(n) {
    return factorsOf(n).length === 2;
}

test('2 is prime', () => {
    expect(isPrime(2)).toBe(true);
});

