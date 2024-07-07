// Traditional Function
function createCounter() {
    let c = 0

    function inc(){
        return ++c
    }
    return inc
}
console.log("---- Traditional FN ---- ");
let count1 = createCounter()
console.log(count1());
console.log(count1());
console.log(count1());
console.log("-----------------");
let count2 = createCounter()
console.log(count2());
console.log(count2());
console.log(count2());

// Arrow Function
function createArrowCounter() {
    let c = 0
    return () => ++c
}

console.log("---- ARROW FN ---- ");
let countArrow1 = createArrowCounter()
console.log(countArrow1());
console.log(countArrow1());
console.log(countArrow1());
console.log("-----------------");
let countArrow2 = createArrowCounter()
console.log(countArrow2());
console.log(countArrow2());
console.log(countArrow2());