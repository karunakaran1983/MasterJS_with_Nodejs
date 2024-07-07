"use strict";

// function abc() {
//     console.log(100);
// }

// function abc() {
//     console.log(200);
// }

// abc() // both fns are in global scope and so it works

if(1===1){ // Inside Block scope & using strict => fn redeclaration wont work
    function abc() {
        console.log(100);
    }
    
    function abc() { // SyntaxError: Identifier 'abc' has already been declared
        console.log(200);
    }
    abc()   
}
abc()