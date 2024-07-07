let c = 200

function abc() {
    let a = 100
    function xyz() {
        a++
        c++
        console.log(a);
        console.log(c); // c is global variable and so incremented during secondRun() call
    }
    return xyz
}

let firstRun = abc()
let secondRun = abc()
firstRun() // firstRun holds the function return value and so able to access it
secondRun() // value of a refreshed to 100 again

let thirdRun = secondRun // Copy of secondRun is assigned to thirdRun and so variable a is incremented
thirdRun()