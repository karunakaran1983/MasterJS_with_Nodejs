// Traditional function
let multiply = function(num1, num2) {
    return num1 * num2
}

// Arrow function
/* 
    1. Remove function keyword
    2. If the body is having 1 line of code then remove {} & return keyword
*/
let multiply1 = (num1, num2) => {
    return num1 * num2
}

let multiply2 = (num1, num2) => num1 * num2

console.log(multiply(3, 4));
console.log(multiply1(3, 4));
console.log(multiply2(3, 4));
