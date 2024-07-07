/* 
    1st => RE-DECLARATION OF VARIABLE OF VAR vs LET
*/
var a = 100
var a = "Karun"
console.log(a); // displays latest 'a' value

// let b = 100
// let b = "Karun" // SyntaxError: Identifier 'b' has already been declared
// console.log(b); // 'let' doesn't allow to get re-declared


/* 
    2nd => 
        var => function-scoped
        let => block-scoped
*/

function abc() {
    var b = 100 // 'var b' is function-scoped means that is valid only inside this fn
    console.log('var c inside function', c)
    let k = 25 // let is block-scoped and so its not visible outside fn block
}

// console.log(b); // ReferenceError: b is not defined

if(100===100) {
    var c = 200 // 'var c' is ONLY function-scoped and so it behaves like global scope which mean accessible anywhere
    let r = 28 // let is block-scoped and so its not visible outside block
}

console.log('var c inside block', c);
abc()
// console.log('let k : ', k); // ReferenceError: k is not defined
// console.log('let r : ', r); // ReferenceError: r is not defined

/* 
    3rd => 
        Accessing var variable before its declaration results in undefind
        Accessing let variable before its declaration results in ReferenceError
*/

console.log('Displaying var variable value before declaration: ', kk)
var kk = 102 // undefined

// console.log('Displaying let variable value before declaration: ', rr)
let rr = 104 // ReferenceError: Cannot access 'rr' before initialization

/* 
    Accessing Var or let before declaration
    var - undefined
    let - ReferenceError
*/

console.log('value of var m before declaration', m); // undefined
var m = 100

console.log('value of let p before declaration', p); // ReferenceError
let p = 101