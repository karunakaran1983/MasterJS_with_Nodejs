// array of numbers
let numArray = [10, 20, 30, 40, 50]

// array of strings
let strArray = ["sun", "mon", "tue", "wed"]

console.log(numArray)
console.log(strArray)

// Add elements to the end of an array
numArray[5] = 70
strArray[4] = "fri"

console.log("Array values after adding elements")
console.log(numArray)
console.log(strArray)

// array length
console.log("Array Length")
console.log(numArray.length)
console.log(strArray.length)


// Add elements to any index an array
numArray[10] = 90
strArray[10] = "sat"
console.log("Array Length after adding element to any index")
console.log(numArray)
console.log(strArray)
console.log(numArray.length)
console.log(strArray.length)
// Tip => Length = index + 1

// Retrieve elements where element isnt there
console.log(numArray[7]) // undefined
console.log(strArray[7]) // undefined

// Modify array element
numArray[0] = 5
strArray[1] = "thu"
console.log(numArray)
console.log(strArray)

// Remove an element from an array
numArray[2] = undefined
strArray[3] = undefined
console.log(numArray)
console.log(strArray)
console.log(numArray.length)
console.log(strArray.length)

// view the elements of an array using for of loop
console.log("Displaying the elements of an numArray")
for (const num of numArray) {
    console.log(num)
}
console.log("Displaying the elements of an numArray as per its element's value")
for (const num of numArray) {
    console.log(numArray[num])
}