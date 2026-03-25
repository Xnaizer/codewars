function groupAnimals(animals) {
  let result = [];
  let hurufs = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for(let i = 0; i < hurufs.length; i++) {
    let temp = [];
    
    for(let j = 0; j < animals.length; j++) {
        if(hurufs[i] === animals[j][0].toLowerCase()) {
            temp.push(animals[j])
        }
    }

    if(temp.length > 0) {
        result.push(temp);
    }
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]