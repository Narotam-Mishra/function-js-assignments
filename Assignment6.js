/*
Write a JavaScript function called curry that takes a function as an argument and returns a curried
version of that function. The curried function should accept arguments one at a time and return a new
function until all arguments are provided. Then, it should execute the original function with all arguments.
Test the curry function with a function that adds two numbers.
*/

function curry(fn){
    
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }else{
            return function(...nextArgs){
                return curried(...args, ...nextArgs);
            }
        }
    }
}

function sum(n1,n2){ return n1+n2 }

const cSum = curry(sum);

console.log("Curried sum: ",cSum(12)(10));
console.log("Curried sum: ",cSum(15,11));
