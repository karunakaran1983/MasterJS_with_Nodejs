
const a = {}

function b(){

}

a.__proto__.prop1 = "Test Prop1"

console.log(a.__proto__);
console.log(b.__proto__.__proto__);

if(a.__proto__ === b.__proto__.__proto__) {
    console.log("Same Null Object");
} else {
    console.log("Not Same Null Object");
}

console.log(a.prop1);
console.log(b.prop1); // function looks for prop1 in its function and then in Object and then in null Prototype

const c = {}

console.log(c.prop1);