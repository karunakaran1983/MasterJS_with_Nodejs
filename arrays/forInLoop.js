// for...in loop is to iterate over OBJECTS

let periodicTable = {
    H: "Hydrogen",
    He: "Helium",
    Li: "Lithium",
    B: "Boron",
    C: "Carbon",
    N: "Nitrogen",
    O: "Oxygen"
}

for (const key in periodicTable) {
    // console.log("Key of periodicTable: ", key) // displays keys of the object
    // console.log("Value of periodicTable: ", periodicTable[key]) // displays values of the object
    console.log(` ${key}: ${periodicTable[key]}`)
}