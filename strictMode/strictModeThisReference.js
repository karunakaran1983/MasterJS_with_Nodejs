"use strict";

// // standalone fns
// function abc() {
//     console.log(this);
// }
// abc() // displays global object

function abcd() {
    console.log(this);
}
abcd() // undefined

const obj1 = {
    prop: 25,
    fun1: function() {
        console.log(this);
    }
}

obj1.fun1() // this in fun1 shows obj1 info