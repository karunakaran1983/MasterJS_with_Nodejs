function displayNumbers(num1, num2) {
    console.log(num1)
    console.log(num2)
}

console.log('Passing 2 arguments')
addNumbers(10, 15)
console.log('Passing 1 argument')
addNumbers(10)
console.log('Passing 0 argument')
addNumbers()
console.log('Passing more arguments')
addNumbers(10, 15, 25)
console.log('Passing last argument')
addNumbers(undefined, 15)