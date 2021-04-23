function hello() {
   console.log("Hello World");
}

function callNTimes(number,functionHello) {
    for(var n = 0;n<number;n++ ){
            functionHello();
    }
}

callNTimes(5,hello);