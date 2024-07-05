function displayNumbers(num1, num2=50) {
    console.log(num1)
    console.log(num2)
}

console.log('displayNumbers')
displayNumbers(20)
displayNumbers(20, 60)

function showNumbers(num1=55, num2=50) {
    console.log(num1)
    console.log(num2)
}

console.log('showNumbers')
showNumbers(20)
showNumbers(undefined, 40)