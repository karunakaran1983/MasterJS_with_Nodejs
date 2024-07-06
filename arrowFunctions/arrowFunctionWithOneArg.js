// Traditional function
let sqrtAndDivide = function(num1) {
    return num1 * num1/2
}

// Arrow function with 1 arg -> we can safely remove the parenthesis around the argument

let sqrtAndDivide1 = num1 => num1 * num1/2

console.log(sqrtAndDivide(10));
console.log(sqrtAndDivide1(10));