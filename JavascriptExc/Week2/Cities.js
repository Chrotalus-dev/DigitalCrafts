var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];
  function citiesTemperature (){
    var newArray = cities.filter(function(x){
        return x.temperature < 70.0;
    });
    return newArray;


  }
  console.log(citiesTemperature(cities));