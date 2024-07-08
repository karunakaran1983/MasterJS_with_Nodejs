let str1 = "Sunday_Monday_Tuesday"

console.log(str1.split('_'));

str1 = "Sunday$Monday$Tuesday"
console.log(str1.split('$'));
console.log(str1.split(/[^A-Za-z0-9]/));