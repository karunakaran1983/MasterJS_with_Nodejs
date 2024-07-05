/* 
Assigning a function to a variable => Anonymous Function in JS
*/

let k = function showValue(arg) {
    console.log(arg)
}

k(15)
k('Passing a string')

// Function name showValue is obsolete and we can remove it. This is called Anonymous function

let ck = function(arg) {
    console.log(arg)
}

// We need to careful not to assign any value to anonymous function variable like below
// ck = 100 // TypeError: ck is not a function
ck('This is an Anonymous function')