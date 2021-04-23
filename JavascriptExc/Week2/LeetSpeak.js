function leetSpeak(phrase) {
    completePhrase = new Array();
    completePhrase = phrase.split('');
    for (var n = 0; n <= completePhrase.length - 1; n++) {
        if (completePhrase[n] == "a" || completePhrase[n] == "A") {
            completePhrase[n] = completePhrase[n].replace("a", "A");
            completePhrase[n] = completePhrase[n].replace("A", "4");
        }
        else if (completePhrase[n] == "e" || completePhrase[n] == "E") {
            completePhrase[n] = completePhrase[n].replace("e", "E");
            completePhrase[n] = completePhrase[n].replace("E", "3");
        }
        else if (completePhrase[n] == "g" || completePhrase[n] == "G") {
            completePhrase[n] = completePhrase[n].replace("g", "G");
            completePhrase[n] = completePhrase[n].replace("G", "6");
        }
        else if (completePhrase[n] == "i" || completePhrase[n] == "I") {
            completePhrase[n] = completePhrase[n].replace("i", "I");
            completePhrase[n] = completePhrase[n].replace("I", "1");
        }
        else if (completePhrase[n] == "o" || completePhrase[n] == "O") {
            completePhrase[n] = completePhrase[n].replace("o", "O");
            completePhrase[n] = completePhrase[n].replace("O", "0");
        }
        else if (completePhrase[n] == "s" || completePhrase[n] == "S") {
            completePhrase[n] = completePhrase[n].replace("s", "S");
            completePhrase[n] = completePhrase[n].replace("S", "5");
        }
        else if (completePhrase[n] == "t" || completePhrase[n] == "T") {
            completePhrase[n] = completePhrase[n].replace("t", "T");
            completePhrase[n] = completePhrase[n].replace("T", "7");
        }

    }
    console.log(completePhrase.join(''));
}
leetSpeak("Welcome to DigitAl Crafts for Julio");