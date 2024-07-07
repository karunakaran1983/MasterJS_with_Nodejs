function abc(num1, num2, fun1) {
    let num3 = num1 + num2
    fun1(num3)
}

function f1(x){
    console.log(x * x);
}

function f2(x){
    console.log(x / 2);
}

function f3(x){
    console.log(x / 3);
}

abc(2, 8, f1)
abc(20, 78, f2)
abc(25, 45, f3)