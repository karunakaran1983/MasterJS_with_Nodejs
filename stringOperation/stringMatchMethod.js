let str1 = "Original price of this product is $100 but after discount it'll be $69.99"

// \${1} => Starts with $ and it appears only once
// \d{1,}.? => Followed by digit(s) and then . which is optionals
// \d{1,} => After dot there are one or more digits
// g => global or multiple occurence
console.log(str1.match(/\${1}\d{1,}.?\d{1,}/g));

str1 =  "Original $4.98 price 99 of this $56 product is $100 but after $0.99 discount it'll be $69.99"
console.log(str1.match(/\${1}\d{1,}.?\d{1,}/g));