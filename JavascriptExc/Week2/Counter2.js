const counter = (x) => {
    if (x == null && counter1 === undefined)
        return x = 0;
    else if (x != null && counter1 === undefined) {
        return x;
    }
    else return x + 1;

}
var counter1 = counter(25);
function count1() {
    return counter1 = counter(counter1);
}

console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());