// // Original Contructor Function
// function Phone(make) {
//     this.make = make
//     this.getMake = function() {
//         return this.make
//     }
//     this.switchOn = function() {
//         console.log("Device is switched On");
//     }
// }

// let iPhone = new Phone("Apple")
// let nexus = new Phone("Goole")

// console.log(iPhone);
// console.log(nexus);

// WE CAN MOVE THE REPEATED FUNCTIONS TO THE PROTOTYPE
function Phone(make) {
    this.make = make
}

Phone.prototype.getMake = function() {
    return this.make
}

Phone.prototype.switchOn = function() {
    console.log("Device is switched On");
}

let iPhone = new Phone("Apple")
let nexus = new Phone("Goole")

// console.log(iPhone);
// console.log(iPhone.getMake());
// console.log(nexus);
// nexus.switchOn()

console.log(Object.getOwnPropertyNames(iPhone)); // Gives all the properties 
console.log(Object.getPrototypeOf(iPhone)); // Gives all the functions (behavior)

console.log(iPhone.prototype);
console.log(iPhone.__proto__);
console.log(Phone.prototype);
console.log(Phone.__proto__);