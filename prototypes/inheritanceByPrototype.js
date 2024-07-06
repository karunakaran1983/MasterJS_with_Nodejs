const animal = {
    name: "Animal",
    jump: function() {
        console.log("Jumps");
    },
    play: function() {
        console.log("Plays");
    }
}

let cat = {
    name: "Queen",
    __proto__: animal // Inherits animal object
}

let dog = {
    name: "Blicksum",
    __proto__: animal // Inherits animal object
}

cat.play()
dog.jump()