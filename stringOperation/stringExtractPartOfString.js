let str1 = "Your order number: DEZ-1258-6258"
// console.log(str1.substr(0, 4)); // begin index and length of the cut
// console.log(str1.substr(19, 3));
// console.log(str1.substr(19));

// substr is DEPRECATED
let str2 = "order number: "
let pos = str1.indexOf(str2)
console.log(pos);
console.log(str1.substr(pos + str2.length));

console.log(str1.substring(0, 3)); // index , length