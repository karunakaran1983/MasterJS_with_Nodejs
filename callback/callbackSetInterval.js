/* 
    The setInterval function allows you to execute a function repeatedly, starting after a
    specified number of milliseconds and then repeating continuously at that interval
*/

let interval1 = setInterval(fun1, 2000)
let c = 0

function fun1() {
    c++
    console.log("Interval function");

    if(c > 4) {
        clearInterval(interval1)
    }   
}

let c1 = 0
let interval2 = setInterval(() => {
    c1++
    console.log("Interval function 2");
    if(c1 > 5) {
        clearInterval(interval2)
    }
}, 3000);