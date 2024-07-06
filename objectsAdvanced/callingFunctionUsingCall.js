
let abc = function() {
    console.log("Hello Karun")
}

// abc() // Traditional way of calling the function
// abc.call() // using call method

// Definition: Calls a method of an object, substituting another object for the current object.

let account = {
    name: "Karun",
    number: 1234,
    amount: 100,
    addAmt: function(amt) {
        this.amount += amt
    }
}

console.log(account)
account.addAmt(100)
console.log(account.amount)

let accountManager = {
    name: "Yash",
    managingAccountFor: account.name,
    addAmt: account.addAmt
}

// accountManager.addAmt(); // returns amount as NaN as addAmt refers to account object

console.log(account)
console.log(accountManager)

// 1st argument of call is reference object
// 2nd argument of call is addAmt function argument -> that is amt
accountManager.addAmt.call(account, 500) // Doesn't return Nan

console.log(account)
console.log(accountManager)