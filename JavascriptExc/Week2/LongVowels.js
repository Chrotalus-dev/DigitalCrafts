function longVowels(word){
var completeWord = [];
completeWord= word.split('');

for (var n = 0; n <= completeWord.length - 1; n++) {
    if(completeWord[n]=='a' && completeWord[n+1]=='a'){
        completeWord.splice(n,0,"aaa")
        break;
    }
    else if(completeWord[n]=='e' && completeWord[n+1]=='e'){
        completeWord.splice(n,0,"eee")
        break;
    }
    else if(completeWord[n]=='i' && completeWord[n+1]=='i'){
        completeWord.splice(n,0,"iii")
        break;
    }
    else if(completeWord[n]=='o' && completeWord[n+1]=='o'){
        completeWord.splice(n,0,"ooo")
        break;
    }
    else if(completeWord[n]=='u' && completeWord[n+1]=='u'){
        completeWord.splice(n,0,"uuu")
        break;
    }

}
console.log(completeWord.join(''))

}
longVowels("Freedom");