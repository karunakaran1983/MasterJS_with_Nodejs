// Below function is called Constructor Function (Object constructor)
// Constructor function starts with CAPS unlike regular function syntax
// Constructor function removes Object creation & return object line by using new keyword
// const student = {} // Object creation
// return student // return object

function Student(name, age, city, country) {
    this["name"] = name
    this["age"] = age
    this["city"] = city
    this["country"] = country
}

const s1 = new Student("yash", 32, "texas", "USA")
const s2 = new Student("gnanavel", 55, "pondy", "India")

console.log(s1)
console.log(s2)