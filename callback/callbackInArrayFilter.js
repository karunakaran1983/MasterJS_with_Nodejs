let arr = [1, 126, 6, 10, 55, 89, 76, 33, 21, 27]

let arr3 = arr.filter(fun1)

function fun1(num) {
    return num % 3 === 0
}

console.log("array that is divisible by 3: ", arr3);

// Arrow function
let arr2 = arr.filter(num => num % 2 === 0)
console.log("array that is divisible by 2: ", arr2);

// find
let findFirstDivisibleBy2 = arr.find(num => num % 2 === 0)
console.log("First array element is divisible by 2: ", findFirstDivisibleBy2);

// some
let findAnyDivisibleBy6 = arr.some(num => num % 6 === 0)
console.log("First array element is divisible by 6: ", findAnyDivisibleBy6); // true

if(findAnyDivisibleBy6) {
    let findFirstDivisibleBy6 = arr.find(num => num % 6 === 0)
    console.log("First array element is divisible by 6: ", findFirstDivisibleBy6);
}