let str = "PERSEVERANCE"

// console.log(str.charAt(0));
// console.log(str.charAt(5));
// console.log(str.charAt(11));
// console.log(str[0]);
// console.log(str[str.length-1]);

// for (let i = 0; i <= str.length-1; i++) {
//     console.log(str[i]);  
// }

// Reverse the string
// console.log(str.length);
for (let i = str.length; i > 0 ; i--) {
    console.log(str[i-1])
}

let temp = ""
for (let i = 0; i <= str.length-1; i++) {
    console.log(str[i]);
    temp = str[i] + temp
}
console.log(temp);
