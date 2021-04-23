var numbers=[1,2,3]
function sum(sumNumbers)
{
   return sumNumbers.reduce(function(a,b){
        return a+b;
    })
}
console.log(sum(numbers));
