/* 
Scopes:
    1. Global Scope
    2. Local Scope
        a. Function Scope
        b. Block Scope
*/

let a = 100 // Global Scope

function abc() {
    let b = 300 // Function Scope
    console.log("Global Scope Variable inside Function: ", a)
    console.log("Function Scope Variable inside Function: ", b)
    // console.log("Block Scope Variable inside Function: ", c) // ReferenceError: c is not defined
}

if (1 == 1) {
    let c = 400
    console.log("Global Scope Variable inside Block: ", a)
    // console.log("Function Scope: ", b) // ReferenceError: b is not defined
    console.log("Block Scope Variable inside Block: ", c)
}

// console.log("Block Scope Variable Outside Block: ", c) // ReferenceError: c is not defined

abc()