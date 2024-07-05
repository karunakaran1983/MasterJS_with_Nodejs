/* 
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
*/

abc()

function abc() {
    console.log("This is hoisting. We can call the fn before its declaration")
}

// Functions are hoisted but function expression are not

// kck() // ReferenceError: kck is not defined

// let kak = function() {
//     console.log('function expression (or anonymous fn) ARN\'T hoisted')
// }

console.log('var testValue is called before its assignment and so it is => ', testValue)
var testValue = 100

console.log('let testValue1 is called before its assignment and so it is ReferenceError => ', testValue1) // ReferenceError: Cannot access 'testValue1' before initialization
let testValue1 = 200


/* 
Hoisting Behaviors:
1. Function can be called before its declaration
2. Expression (or Anonymous) Function CAN'T be called before its declaration
3. When var variable is called before its declaration then it gives undefined
4. When let variable is called before its declaration then it gives ReferenceError
*/