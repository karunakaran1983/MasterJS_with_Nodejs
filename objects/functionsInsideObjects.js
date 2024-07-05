let obj2 = {
    firstName : "Karun",
    age : 40,
    city : "Schiedam",
    martialStatus : "married",
    displayDetails: function deails() {
        console.log(`${obj2.firstName} is ${obj2.age} years old and he is living in ${this.city}`)
    },
    information() {
        console.log(`${obj2.firstName} is ${obj2.age} years old, ${this.martialStatus} and he is living in ${this.city}`)
    }

}

obj2.displayDetails()
obj2.information()