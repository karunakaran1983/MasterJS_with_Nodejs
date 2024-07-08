let str1 = "I like node js"
let str2 = "I like NODE JS"

// Comparing 2 strings
console.log("Comparison => ", str1 === str2)

// Upper or Lower case
console.log("UpperCase => ", str1.toUpperCase === str2.toUpperCase);
console.log("LowerCase => ", str1.toLowerCase === str2.toLowerCase);

// Trim
str1 = "    I like NODE JS"
str2 = "I LIKE NODE JS        "
console.log("Trim => ", str1.trim());
console.log("Trim => ", str2.trim());

// Concatenation
str1 = "I"
str2 = "Love"
str3 = "Myself"
console.log("Concatenation => ", str1 + " " + str2 + " " + str3);
console.log("Using concat() => ", str1.concat(" ",str2," ", str3));