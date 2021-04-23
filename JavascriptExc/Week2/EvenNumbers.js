var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenNumbers(numArray) {
    var newArray = numArray.filter(function(x){
        return x%2 === 0;
    });
    return newArray;
  }
   console.log(evenNumbers(numbers));