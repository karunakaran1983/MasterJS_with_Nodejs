// a = 15
// console.log(a);

// function abc(k) {
//     "use strict";
//     // b = 100 // ReferenceError: b is not defined
//     // console.log(b);
//     console.log(k);
// }

// abc()
// abc(22)


// function abcd(k=5) { // default parameter NOT allowed
//     "use strict"; // SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
//     // b = 100 // ReferenceError: b is not defined
//     // console.log(b);
//     console.log(k);
// }
// abcd(30)


// function abcde(...param) { // rest parameter NOT allowed
//     "use strict"; // SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
//     // b = 100 // ReferenceError: b is not defined
//     // console.log(b);
//     console.log(k);
// }
// abcde(29)

// strict mode with arrow function
let abcdef = () => { 
    "use strict"; 
     b = 100 // ReferenceError: b is not defined
     console.log(b);
}
abcdef()
