

const counter = (x) => {
    if(x==null)
    return x=0;
    else
  return x+1;
}

var counter1 = counter();
var counter2 = counter();

function count1() {
    return counter1 = counter(counter1);
   
    }

function count2() {
   return counter2 = counter(counter2);
   
}

console.log(count1());
console.log(count1());
console.log(count2());
console.log(count1());
console.log(count2());