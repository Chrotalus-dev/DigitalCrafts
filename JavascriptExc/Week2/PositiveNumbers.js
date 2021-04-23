 var numbers = [1, -3, 5, -3, 0];
/*function positiveNumbers(positiveArray) {

    for (var n = 0; n <= positiveArray.length - 1; n++) {
        if (positiveArray[n] < 0) {
            positiveArray.splice(n, 1);
        }

    }
    return positiveArray;
}
positiveNumbers(numbers);
console.log(numbers); */

function pos(numArray) {
    var newArray=[];
     numArray.map(function(num) {
      if(num >= 0){
        newArray.push(num);
      }
    });
    return newArray;
  }
   console.log(pos(numbers));