// Add, Update & Delete Object properties

let obj2 = {
    firstName : "Karun",
    age : 40,
    city : "Schiedam",
    martialStatus : "married"
}

// Add
obj2.middleName = "Dayanidhi"
obj2["height"] = 172

// Update
obj2.firstName = "Kani"

console.log(obj2)

// Delete
delete obj2.martialStatus
delete obj2["age"]
console.log(obj2)