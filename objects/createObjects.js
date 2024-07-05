let obj = {}

console.log('Object is: ', obj)

// value1 & value2 are just key (custom names)
obj.value1 = "karun"
obj.value2 = "ramya"

console.log('Object is: ', obj)

let obj2 = {
    name : "Karun",
    age : 40,
    city : "Schiedam",
    isMarried : true
}

console.log(obj2)
console.log(obj2.name) // dot notation
console.log(obj2["age"]) // bracket notation

// we can add properties even after obj creation
obj2["height"] = 172
console.log(obj2)

obj2["age"] = 39
console.log(obj2)

// Usage of bracket notation
// 1. If name of the property is number
let obj3 = {
    firstName: "yash",
    lastName: "isai",
    100: "hours"
}

console.log(obj3[100]) // if key is number then double quotes is NOT needed and we can use only bracket notation
// console.log(obj3.100) // SyntaxError: missing ) after argument list

// 2. If name of the property is a variable
let kk = "firstName"
console.log(obj3[kk])