const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
]
console.log(planets)
console.log('Is Mars part of Planets Array                => ', planets.includes("Mars"))
// includes is case sensitive
console.log('Is mars (lowercase) part of Planets Array    => ', planets.includes("mars"))
console.log('Is Mars part of Planets Array from 4th index => ', planets.includes("Mars", 4))


// Add more Saturn into planets array
planets[15] = "Saturn"
console.log(planets)
// indexOf is case sensitive
console.log('Get the first index of Saturn in Planets Array                => ', planets.indexOf("Saturn"))
console.log('Get the first index of Saturn in Planets Array from 6th index => ', planets.indexOf("Saturn", 6))
console.log('Get the first index of saturn in Planets Array                => ', planets.indexOf("saturn"))
// lastIndexOf is case sensitive
console.log('Get the last index of Saturn in planets Array                 => ', planets.lastIndexOf("Saturn"))
console.log('Get the last index of Saturn in planets Array from 6th index  => ', planets.lastIndexOf("Saturn", 6))
console.log('Get the last index of saturn in planets Array                 => ', planets.lastIndexOf("saturn"))
// console.log(planets.length)
console.log('Array index is -1 if element is not found                     => ', planets.indexOf("Pluto"))
