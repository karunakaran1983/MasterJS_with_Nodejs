// Traditional value of creating Objects

function Employee(name, age, height) {
    this.name = name
    this.age = age
    this.height = height
}

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const emp = new Employee("K", 12, 172) 
const user = new User("R", 25)

console.log(emp);
console.log(user);