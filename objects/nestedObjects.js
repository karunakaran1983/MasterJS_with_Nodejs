
let obj2 = {
    firstName : "Karun",
    age : 40,
    city : "Schiedam",
    martialStatus : "married",
    address: {
        doorNumber: 28,
        streetName: "Rhoonsestraat",
        landmark: "Corner House"
    }
}

console.log(obj2)
console.log(obj2.address.doorNumber)
console.log(obj2.address["landmark"])
obj2.address.carParking = "Yes"

obj2.address["landmark"] = "Row House End House"
console.log(obj2)