// Add one or more elements to the end of an array => PUSH

let arr = [10, 20, 30, 40, 50]
console.log(arr)

arr.push(60, 70, 80)
console.log("after PUSH => ", arr)
arr.push(undefined, undefined, undefined) // we can even push undefined to an array
console.log("after PUSH => ", arr)

// Remove the last element from the end of an array => POP
arr = [10, 20, 30, 40, 50, 60, 70, 80]
console.log("new array values are ", arr)
arr.pop()
console.log("after POP => ", arr)

// Add one or more elements to the start of an array => UNSHIFT
let unshiftArr = [10, 20, 30, 40]
console.log("unshiftArr array values are ", unshiftArr)

unshiftArr.unshift(2, 3, 5)
console.log("unshiftArr array values after UNSHIFT ", unshiftArr)

// Remove the first element from the start of an array => SHIFT
let shiftArr = [10, 20, 30, 40]
console.log("shiftArr array values are ", shiftArr)

shiftArr.shift()
console.log("shiftArr array values after SHIFT ", shiftArr)
