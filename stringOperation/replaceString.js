let str1 = "I like learning new skills"

let str2 = str1.replace("like", "love") // replace works only for first match
console.log(str2);

let str3 = "I like learning like new skills"
let str4 = str3.replace("like", "love") // replace works only for first match
console.log(str4);

// to replace all matches, use regex
let str5 = "I like learning like new skills"
let str6 = str5.replace(/like/g, "love") // regex doesnt need double quotes
console.log(str6);

let str7 = "I like learning like new LIKE skills"
let str8 = str7.replace(/like/gi, "love") // g - global or all occurence, i - ignore case
console.log(str8);

let str9 = "$%KDFGSDGSDdkkkl()!@##$#$$fgfgg23w25"
let str11 = str9.replace(/\W/g,"") // All the special chars are removed
console.log(str11);

let str12 = str9.replace(/\d/g, "") // All the digits are removed
console.log(str12);