
function AppleDevice(deviceName, deviceOS, display) {
    this.deviceName = deviceName
    this.deviceOS = deviceOS
    this.display = display
    console.log(`${deviceName} with ${deviceOS}`)
}

const device1 = new AppleDevice() // we can create an object without passing any arguments
device1.deviceName = "Iphone14"
console.log(device1)