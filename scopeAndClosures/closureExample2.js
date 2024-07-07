function createGreeting(grtMsg) {
    return function(name) {
        return grtMsg + ", " + name
    }
}

let englishGreeting = createGreeting("Hiii...")
let tamilGreeting = createGreeting("Vanakkam...")

console.log(englishGreeting("Karun"));
console.log(tamilGreeting("Ramya"));  