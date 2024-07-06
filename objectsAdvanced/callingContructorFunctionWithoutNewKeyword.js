
function AppleDevice(deviceName, deviceOS, display) {
    this.deviceName = deviceName
    this.deviceOS = deviceOS
    this.display = display
    console.log(`${deviceName} with ${deviceOS}`)
}

const device1 = AppleDevice("Iphone13", "IOS13") // we can call the contructor function without new keyword but Object wont be created
console.log(device1)
// console.log(device1.deviceName) // TypeError: Cannot read properties of undefined (reading 'deviceName')

/* 
    Significance of 'new.target'
*/

function AppleDevice(deviceName, deviceOS, display) {
    if(!new.target) {
        return `${deviceName} with ${deviceOS}`
    }
    this.deviceName = deviceName
    this.deviceOS = deviceOS
}

const device2 = AppleDevice("Iphone13", "IOS13") // if new isn't used then if is executed
const device3 = new AppleDevice("Iphone14", "IOS16")

console.log(device2)
console.log(device3)