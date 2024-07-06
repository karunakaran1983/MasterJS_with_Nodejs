class EmployeeType {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }
}

// Inheritance
class Manager extends EmployeeType {
    constructor(name, id, email, managerId) {
        super(name, id, email) // Call parent class
        this.managerId = managerId
    }

    createReport() {
        console.log("Manager Report Created");
    }
}

let manager2 = new Manager("Jack", 1245, "karun@QAVoice.com")
console.log(manager2);
let manager3 = new Manager("Jack", 1245, "karun@QAVoice.com", 2589)
console.log(manager3);