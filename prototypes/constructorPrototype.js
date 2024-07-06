function Phone(make) {
    this.make = make
}

let iPhone = new Phone("Apple")
let nexus = new Phone("Goole")

if(Phone.prototype === iPhone.__proto__ && Phone.prototype === nexus.__proto__) {
    console.log("Same Object");
} else {
    console.log("Not Same");
}

if(Phone.prototype === Phone.__proto__) {
    console.log("Phone prototype & __proto__ are Same Object");
} else {
    console.log("Phone prototype & __proto__ are NOT Same Object");
}