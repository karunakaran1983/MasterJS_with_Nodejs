
// console.log(kt) // ReferenceError: kt is not defined

kj = 150
console.log(kj); // JS accepts without var or let

// Accessing a undeclared variable inside a function

function abc() {
    kr = 80
    console.log('undeclared kr inside function ', kr);
}

abc()

function abcd() {
    kra = 80 // Undeclared variables are Global variables
}

abcd()
console.log('undeclared kra inside function ', kra);
