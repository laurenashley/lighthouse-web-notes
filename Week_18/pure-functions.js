/**
 * Pure Functions
 * 
 * Used in functional programming.
 * 
 * 1. Identical return values given identical parameters
 * 2. No side-effects
 */

let sum = 0;

function addTwoNums(num1, num2) {
    sum += Number(num1) + Number(num2);
    return sum;
}

console.log(
    addTwoNums(5, 6),
    addTwoNums(5, 6),
    addTwoNums(5, 6)
);

function log(msg) {
    console.log(msg);
}