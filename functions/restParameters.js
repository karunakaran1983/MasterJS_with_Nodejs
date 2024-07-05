/* 
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
*/

function abc(a, b, ...numbers) {
    console.log(a)
    console.log(b)
    console.log(numbers)

    for(let num of numbers) {
        console.log(num)
    }
}

abc(10, 20, 30, 40, 50, 60)

// Difference between argument objects & rest parameters
// argument objects => array like params
// rest parameter => array params