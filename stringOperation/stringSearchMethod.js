let str1 = "Find the position of @ special character in this string"

// indexOf

console.log(str1.indexOf("@"));
console.log(str1.search("@")); // search can accept regex
console.log(str1.search(/[^A-Za-z0-9 ]/)); // space after 9 is VERY VERY IMPORTANT

str1 = "Find the position of $ special character in this string"
console.log(str1.search(/[^A-Za-z0-9 ]/)); // even though special is changed, regex works