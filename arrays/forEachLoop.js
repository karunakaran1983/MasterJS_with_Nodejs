/* 
for...each loop is for array
*/

let numbers = [25, 26, 18, 10, 74, 99]

numbers.forEach(function() {
    console.log("Test") // Executes for all the items in an array
})

// first optional argument is => value
numbers.forEach(function(item) {
    console.log("Element is => ", item)
})

// second optional argument is => index
numbers.forEach(function(item, index) {
    console.log("Element is => ", item, " is in index ", index)
})

// third optional argument is => array
numbers.forEach(function(item, index, array) {
    console.log("Element is => ", item, " is in index ", index , " and the whole array is ", array)
})

