
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = Math.random()
        console.log(num);

        if(num > 0.2) {
            resolve(num)
        }else {
            reject(num)
        }
    }, 3000);
})

promise.then((res) => {
    console.log("Promise is resolved", res);
})

promise.catch((rej) => {
    console.log("Promise is rejected", rej);
})

promise.finally(() => {
    console.log("Promise is complete");
})

console.log("Program continues...");