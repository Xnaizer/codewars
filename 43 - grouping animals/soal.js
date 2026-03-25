function groupAnimals(animals) {
  let result = [];
  let huruf = {};

  animals.sort()

  for(i in animals) {
    if(!(animals[i][0] in huruf)) {
      huruf[animals[i][0]] = 1
    }
  }
  
  for(key in huruf) {
    let temp = [];

    for(let i = 0; i < animals.length; i++) {
      if(key.toLowerCase() === animals[i][0].toLowerCase()) {
        temp.push(animals[i])
      }
    }

    result.push(temp);
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]