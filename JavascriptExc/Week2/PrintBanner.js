function printBanner(textBanner){
    completeBanner = new Array();
    var completeLine;
    var bannerLenght;
    completeBanner = "* "+textBanner+" *";
    
    bannerLength = completeBanner.length;
    x = new Array(bannerLenght);
   
    for(var n=0;n<=bannerLength-1;n++){
       x.push("*");
   }
   completeLine = x.join('');
   console.log(completeLine);
   console.log(completeBanner);
   console.log(completeLine);
       
   }

   printBanner("Welcome to Digital Crafts for Julio");