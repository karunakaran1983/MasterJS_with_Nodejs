/* 
The arguments object - arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
*/

function abc() {
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
}

abc(20, 50, 75)

console.log("handingArguments using for loop")
function handingArguments() {
    for(let i=0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}

handingArguments(14, 58, 20, 59)

console.log("calculateSum using for loop")
function calculateSum() {
    let sum = 0
    for(let i=0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log('Total Sum is: ', sum)
}

calculateSum(1, 2, 3, 4)
