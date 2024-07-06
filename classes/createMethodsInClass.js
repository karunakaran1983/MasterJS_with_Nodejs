class Car {
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    start() {
        console.log("Car starts");
    }

    stop() {
        console.log("Car stops");
    }
}

const car1 = new Car("Honda", "CRG")
car1.start()
car1.stop()