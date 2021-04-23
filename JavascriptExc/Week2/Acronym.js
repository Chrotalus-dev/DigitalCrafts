var words = ['strategic', 'hazard', 'intervention', 'espionage', 'logistics', 'directorate'];

function acronym(wordsCollection) {
    //var wordsSplitted = "";
    // wordsCollection.forEach(element => wordsSplitted = wordsSplitted + element.split('')[0]);
    //return wordsSplitted.toUpperCase();
    var wordsSplitted = wordsCollection.reduce(function (accumulator, currentValue) {
        return accumulator.concat(currentValue.split('')[0])
    }, []);
    return wordsSplitted.join('').toUpperCase();
}
console.log(acronym(words));