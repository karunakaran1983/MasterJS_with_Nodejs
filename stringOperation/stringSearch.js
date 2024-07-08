let str1 = "it always seems impossible until it's done"
let str2 = "always"
console.log("Look for always => ", str1.includes(str2));

str2 = "Always"
console.log("Look for Always => ", str1.includes(str2)); // includes is case sensitive

str1 = "it always seems impossible until it's done always"
str2 = "always"
let pos = str1.indexOf(str2)
console.log("Look for 2nd always => ", str1.includes(str2, pos));