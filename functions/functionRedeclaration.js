function abc() {
    console.log(100)
}

function abc() {
    console.log(500)
}

abc() // latest declared function is taken into account

// some trials

function kak() {
    console.log(100)
}

let x = function kak() {
    console.log(200)
}

x() // expression function or anonymous fn
kak() // call kak with no args
kak(200) // still calls kak with no args