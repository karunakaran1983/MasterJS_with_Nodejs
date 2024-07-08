
function fetchData(url) {
    return new Promise((resolve, reject) => {
        console.log("Fetching Data...")
        setTimeout(() => {
            const success = Math.random() > 0.3

            if(success) {
                resolve(`Data received from ${url}`)
            }else {
                reject(new error(`Data not received from ${url}`))
            }
        }, 3000);
    })
}

const url = "https://www.dezlearn.com/courses"
fetchData(url)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(()=> console.info("Promise is complete"))

    