// Traditional function
let setCarMode = function(mode){
    return {value: mode} // creating object literal
}

const v1 = setCarMode("Sports")
console.log(v1.value);

let setCarModeArrow = mode => ({value: mode}) // parenthesis is needed around object literal for arrow funtion

const v2 = setCarModeArrow("Sedan")
console.log(v2.value);