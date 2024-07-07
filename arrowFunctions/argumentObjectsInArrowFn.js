/* 
Arrow fn do not have their own arguments object.
Instead, they inherit the arguments object from their
containing (surrounding) non-arrow function
*/

// Traditonal Function for argument object
function abc() {
    for (const arg of arguments) {
        console.log(arg);
    }
}

abc(10, 20, 30)

// Arrow Function for argument object
let abcArrow = () => {
    console.log(arguments[0]);
    // for (const arg of arguments) {
    //     console.log(arg);
    // }
}

abcArrow(10, 20, 30) // {}

function nonArrow() {
    console.log(arguments[0]);
    let arrow = () => {
        console.log(arguments[1]); // arrow fn take the lexical scope and so displays arguments object
    }
    arrow()
}

nonArrow(15, 25, 35)