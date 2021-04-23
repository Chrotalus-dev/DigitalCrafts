function fun() {
    console.log("Hello World");
}

function call3Times(functionHello) {
    functionHello();
    functionHello();
    functionHello();
}
call3Times(fun);