// Traditional way of creating objects
const student1 = {
    name: "karun",
    age: 40,
    city: "rotterdam",
    country: "The Netherlands"
}

const student2 = {
    name: "ramya",
    age: 40,
    city: "schiedam",
    country: "The Netherlands"
}

console.log(student1)
console.log(student2)

// THIS IS INEFFICIENT WAY OF CREATING OBJECTS, BELOW IS THE OPTIMUM WAY

function createStudent(name, age, city, country) {
    const student = {}
    student["name"] = name
    student["age"] = age
    student["city"] = city
    student["country"] = country
    return student
}

const s1 = createStudent("yash", 32, "texas", "USA")
const s2 = createStudent("gnanavel", 55, "pondy", "India")

console.log(s1)
console.log(s2)