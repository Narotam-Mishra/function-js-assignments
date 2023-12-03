/*
Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
recursion. Test the function with different inputs.
*/

function factorialRec(num){
    if(num === 1) return 1;
    return num * factorialRec(num-1);
}

const n = 7;
console.log(`Factorial of ${n}:`,factorialRec(n));