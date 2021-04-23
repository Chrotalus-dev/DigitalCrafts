function printBox(width,height){
    x = new Array(width);
    y = new Array(width);
   
   for(var n=0;n<=width-1;n++){
       x.push("*");
   }
   
   for(var n=0;n<=width-1;n++){
       if(n==0||n==width-1){
        y.push("*");
       }
       else y.push(" ")
   }
      
   for(var n2=1;n2<=height;n2++){
       if(n2==1 || n2==height){
           console.log(x.join(''));        
       }
       else{
        console.log(" ");
        console.log(y.join(''));
        console.log(" ");
       } 
    }
}
   printBox(10,5);