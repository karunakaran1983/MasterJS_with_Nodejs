/* 
 1. Duplicate parameter names are not allowed
 2. Blocked scope function declarations
*/
"use strict"; 

// BEFORE STRICT
// function abc(x, x) {
//     console.log(x) // 20 is displayed
// }

// abc(10, 20)

// AFTER STRICT
// function abc(x, x) { // SyntaxError: Duplicate parameter name not allowed in this context
//     console.log(x)
// }

// abc(10, 20)

// // BLOCK SCOPE WITHOUT STRICT
// if(100 === 100) {
//     function abc(x) {
//         console.log(x); // displays 25
//     }
// }
// abc(25)

// BLOCK SCOPE WITH STRICT
if(100 === 100) {
    console.log("inside if");
    function abc(x) { // ReferenceError: abc is not defined
        console.log(x);
    }
}
abc(25)