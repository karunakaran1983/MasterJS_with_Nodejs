
const fs = require('fs')

fs.readFile("resources/read.txt", "utf-8", (err, data) => {
    if(err){
        console.error("Error reading the file: ", err)
        return
    }

    console.log(data);
})

const content = "JS is easy to learn"

// fs.writeFile("resources/write.txt", content, "utf-8", (err) => {
//     if(err){
//         console.error("Error writing into the file: ", err)
//         return
//     }
// })

fs.appendFile("resources/write.txt", content, "utf-8", (err) => {
    if(err){
        console.error("Error writing into the file: ", err)
        return
    }
})