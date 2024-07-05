// this keyword refers to the object which is calling the function

let obj2 = {
    firstName : "Karun",
    age : 40,
    city : "Schiedam",
    martialStatus : "married",
    information() {
        console.log(`${this.firstName} is ${this.age} years old, ${this.martialStatus} and he is living in ${this.city}`)
        console.log(this)
    }
}

obj2.information()

let obj3 = obj2
obj3.firstName = "bravo"
obj3.age = 42

obj3.information()
obj2.information()

// global object concept

function abc() {
    console.log(this)
}

// abc() // retrieves global object properties

let abcd = {
    x: 100,
    xyz: abc
}

abcd.xyz() // displays the abcd object as this refers to the object which is calling the function