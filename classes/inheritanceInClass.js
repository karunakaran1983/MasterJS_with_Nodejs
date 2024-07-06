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

    createReport() {
        console.log("Manager Report Created");
    }
}

const manager1 =  new Manager("Jack", 1245, "karun@QAVoice.com")
console.log(manager1.getEmail()); 
console.log(manager1.getName());
console.log(manager1.getId());
manager1.createReport()