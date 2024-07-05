// List of Variable Data Types
// 1. Number
// 2. string
// 3. boolean
// 4. BigInt
// 5. Symbol

// 1. Number
let num = 150
// There are 4 ways of consoling out the variables
// Method 1
console.log("value of num using comma: ", num)
console.log("Type of num using comma: ", typeof(num))
// Method 2
console.log("value of num using plus: "+ num) // + converts number to string here
// Method 3
console.log(`value of num using interpolation: ${num}`)
// Method 4
console.log('value of num using string substitution pattern: %d', num)

// 2. string
let str = "Practicing is more important than Learning"
console.log("value of str: ", str)
console.log("Type of str: ", typeof(str))

// 3. boolean
let singleBit = true
console.log("value of singleBit is: ", singleBit)
console.log("Type of singleBit is: ", typeof(singleBit))

// 4. BigInt
// There are 2 ways to declare BigInt
let bigX = BigInt(123456789)
let bigY = 1234567890n

console.log("value of bigX: ", bigX)
console.log("Type of bigX: ", typeof(bigX))
console.log("value of bigY: ", bigY)
console.log("Type of bigY: ", typeof(bigY))

// 5. Symbol
let sym = Symbol('$')
console.log("value of sym: ", sym)
console.log("Type of sym: ", typeof(sym))