/* 
    Closure is the ability of a fn to retain access to variables from its containing (enclosing) scope even after that scope is exited
*/

function abc() {
    let a = 100
    function xyz() {
        console.log(a);
    }
    return xyz
}

let firstRun = abc()
firstRun() // firstRun holds the function return value and so able to access it