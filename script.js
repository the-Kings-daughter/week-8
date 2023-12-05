// Assignment 
// Create a function that checks if the input/parameter is an even number.

function even(integer) {

    if (integer % 2 === 0) {
        console.log ('The number is even');
    }
    else  {
        console.log ('The number is not even');
    }
}

even(4)
even(3)



// Assignment 
// Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter

function printNumbers(n1, n2) {
    for (let i = n1; i <= n2; i++ ) {
        console.log(i);
    }
}

printNumbers(7, 14);



// Assignment 3
// Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.

function multiplyNumbers (n1, n2) {
    let sum = 0;

    for (let f = n1; f <= n2; f++) {
        sum += f;
    }

    return sum;
}

let result = multiplyNumbers(3, 6);
console.log(result);