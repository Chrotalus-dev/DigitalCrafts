function tipAmount(billAmount,levelOfService){
    if (levelOfService == 'good'){
            tip = billAmount * 0.20
      }
       else if(levelOfService == 'fair'){
           tip = billAmount * 0.15
      }
       else if(levelOfService == 'bad'){
            tip = billAmount * 0.10
       }
       else{
        return "I don't know what to tip"
       } 
       return tip;
}
console.log(tipAmount(100,'bad'));

function totalAmount(billAmount,levelOfService){
    return billAmount + tipAmount(billAmount, levelOfService);
 }
 console.log(totalAmount(100,'bad'));