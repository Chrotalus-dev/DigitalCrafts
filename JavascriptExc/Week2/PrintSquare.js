function printSquare(size) {
    x = new Array(size);
    for (var n = 0; n <= size - 1; n++) {
        x.push("*");
    }
    for (var n2 = 0; n2 <= size - 1; n2++) {
        console.log(x.join(''));
    }
}
printSquare(10);
