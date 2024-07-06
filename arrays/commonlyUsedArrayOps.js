/* 
convert array to string => JOIN
get string representation of an array => TOSTRING
*/ 

let colors = ["red", "blue", "green"]

console.log('Using Join method                           => ', colors.join())
console.log('Using Join method, change default delimiter => ', colors.join('_'))
console.log('Using Join method, change default delimiter => ', colors.join('=+='))
console.log('Using toString method                       => ', colors.toString())

let caps = "A_B_C_D_E"
console.log('Using split method, convert string to array => ', caps.split('_'))

console.log('Using reverse method, we can reverse the elements of an array => ', colors.reverse())

colors = ["red", "blue", "green", "brown", "yellow"]
console.log("color array is => ", colors)
console.log('Using slice(), we can cut the whole portion of an array               => ', colors.slice())
console.log('Using slice(1), we can cut from the first element out of an array     => ', colors.slice(1))
console.log('Using slice(1,2), we can cut 2 elements starting from 1st index       => ', colors.slice(1,2))
console.log('Using slice(1,1), we can cut 1 element starting from 1st index        => ', colors.slice(1,1))
console.log('Using slice(1,-1), we can cut from 1st & last element of an array     => ', colors.slice(1,-1))
console.log('Using slice(1,-1), we can cut from 1st & last 2 elements of an array  => ', colors.slice(1,-2))
console.log('Using slice(1, undefined), we can cut from the 1st element until last => ', colors.slice(1, undefined))