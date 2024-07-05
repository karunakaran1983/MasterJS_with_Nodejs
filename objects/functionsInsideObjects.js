let obj2 = {
    firstName : "Karun",
    age : 40,
    city : "Schiedam",
    martialStatus : "married",
    displayDetails: function deails() {
        console.log(`${obj2.firstName} is ${obj2.age} years old and he is living in ${obj2.city}`)
    },
    information() {
        console.log(`${obj2.firstName} is ${obj2.age} years old, ${obj2.martialStatus} and he is living in ${obj2.city}`)
    }

}

obj2.displayDetails()
obj2.information()