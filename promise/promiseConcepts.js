/*
Concept of Promises in JS: Promises in JavaScript represent the eventual result of an asynchronous operation. 

Pending: The initial state, indicating that the promise is still working on its result.
Fulfilled: The state when the operation has completed successfully, returning a value.
Rejected: The state when the operation has failed, typically with an error.
*/

const promise = new Promise((resolve, reject) => {
    console.log("hello")
    resolve("Pass")
})