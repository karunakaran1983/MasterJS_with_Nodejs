let str1 = "ABCDE"

console.log(str1.indexOf('C'));
console.log(str1.indexOf('C',1));
console.log(str1.indexOf('F'));

let str2 = "I like learning new skills"
console.log(str2.indexOf("skills"));

let str3 = "I like learning new skills all skills"
console.log(str3.lastIndexOf("skills"));

// Find second skills position in below sentence
let str4 = "I like skills learning new skills all skills"
let lengthOfSkills = "skills".length
console.log(lengthOfSkills);

let firstOccurenceOfSkills = str4.indexOf("skills")
console.log(firstOccurenceOfSkills);

console.log("Second occurence of skills => ", str4.indexOf("skills", firstOccurenceOfSkills+lengthOfSkills));
console.log("Second occurence of skills => ", str4.indexOf("skills", firstOccurenceOfSkills+1));
