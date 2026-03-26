function urutkanAbjad(str) {
    let letters = str.split("");

  for(let i = 0; i < letters.length; i++) {
    for(let j = 0; j < letters.length; j++) {
        if(letters[i].charCodeAt() < letters[j].charCodeAt()) {
            let x = letters[i];
            letters[i] = letters[j];
            letters[j] = x;
        }
    }
  }

  return letters.join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'