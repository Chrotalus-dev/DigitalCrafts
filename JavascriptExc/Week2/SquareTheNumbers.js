var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function squareTheNumbers(numArray) {
    var newArray = numArray.map(x => x * x);
    return newArray;
}
   console.log(squareTheNumbers(numbers));