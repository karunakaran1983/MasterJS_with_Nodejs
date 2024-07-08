//Why Promises are better than Callbacks for complex operations?
//getOrderDetails(3 sec) -> processOrder(3 sec) -> createTrade(2 sec) -> prosessTrade(5 sec) -> settleTrade(3 sec)

// function getOrderDetails(callback) {
//     setTimeout(() => {
//         console.log("Order details received");
//         callback()
//     }, 3000);
// }

// function processOrder(callback) {
//     setTimeout(() => {
//         console.log("Process order received");
//         callback()
//     }, 3000);
// }

// function createTrade(callback) {
//     setTimeout(() => {
//         console.log("Trade created");
//         callback()
//     }, 3000);
// }

// function processTrade(callback) {
//     setTimeout(() => {
//         console.log("Trade processed");
//         callback()
//     }, 3000);
// }

// function settleTrade() {
//     setTimeout(() => {
//         console.log("Trade settled");
//     }, 3000);
// }

// getOrderDetails(() => { // To handle the argument, we place arrow function
//     processOrder(() => {
//         createTrade(()=> {
//             processTrade(() => {
//                 settleTrade()
//             })
//         })
//     }) 
// })

// ========================================================================
// CONVERTING ALL METHODS TO PROMISE

function getOrderDetails() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log("Order details received");
            resolve("Success")
        }, 3000);
    })   
}

function processOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Process order received");
            resolve("Success")
        }, 3000);    
    })
}

function createTrade() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Trade created");
            resolve("Success")
        }, 3000);
    })
}

function processTrade() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Trade processed");
            resolve()
        }, 3000);
    })
}

function settleTrade() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Trade settled");
            resolve("Success")
        }, 3000);
    })
}

getOrderDetails()
    .then(() => {
        return processOrder()
    })
    .then(()=> {
        return createTrade()
    })
    .then(() => {
        return processTrade()
    })
    .then(() => {
        return settleTrade()
    })
    .then((res) => console.log(res))