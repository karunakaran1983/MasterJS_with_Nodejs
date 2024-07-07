/* 
    A callback is simply a function that is passed as an argument to another
    function and is executed after the completion of that function
*/
function abc(fun1) {
    console.log("I am abc");
    fun1()
}

function xyz() {
    console.log("I am xyz");
}

abc(xyz)