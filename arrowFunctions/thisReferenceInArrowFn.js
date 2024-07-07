
const car = {
    make: "Toyota",
    model: "Land Cruiser",
    price: 60000,
    displayCar: function() {
        function displayMakeAndModel() {
            console.log(`${this.make} ${this.model}`);
        }
        function displayPrice() {
            console.log(`${this.price}`);
        }
        displayMakeAndModel() // undefined due to nested function concept and this belongs to Global scope
        displayPrice() // undefined due to nested function concept and this belongs to Global scope
        // console.log(`${this.make} ${this.model} ${this.price}` ); // This is visible as it part of displayCar()
    }
}

car.displayCar()

// Arrow fns do not have their own 'this' context; instead, they inherit the 'this' value from the enclosing lexial (parent) scope.
const arrowCar = {
    make: "Toyota",
    model: "Land Cruiser",
    price: 60000,
    displayCar: function() {
        let displayMakeAndModel = () => console.log(`${this.make} ${this.model}`)
        let displayPrice = () => console.log(`${this.price}`);
        displayMakeAndModel() 
        displayPrice() 
        // console.log(`${this.make} ${this.model} ${this.price}` ); // This is visible as it part of displayCar()
    }
}

arrowCar.displayCar()

console.log(this);
const arrowCar2 = {
    make: "Toyota",
    model: "Land Cruiser",
    price: 60000,
    // arrow fn 'this' refers to lexical scope and it is Global
    // when we hover over 'this', we could see 'typeof GlobalThis'
    displayCar: () => console.log(`${this.make} ${this.model}`), 
    displayCar1: function() {
        console.log(`${this.make} ${this.model}`) // When we hover over 'this', we could see the properties of this object
    }
}

arrowCar2.displayCar()
arrowCar2.displayCar1()