var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];
function sortAnArray(peopleArray) {
    return peopleArray.sort(function (a, b) {
        return a.length - b.length;
    });
}
console.log(sortAnArray(people));