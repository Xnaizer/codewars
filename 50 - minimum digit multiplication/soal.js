function digitPerkalianMinimum(angka) {
  let result = [];
  let minimDigit = Infinity;

  for(let i = 0; i <= angka; i++) {
    let temp = '';
    for(let j = angka; j > i ; j--) {
        // console.log(i + ' ' + j)
        
        if((i * j) === angka) {
            temp += String(i);
            temp += String(j);
        }
    }
    if(temp !== '') {
        result.push(temp)
    }
  }

  for(let i = 0; i < result.length; i++) {
    if(minimDigit > result[i].length) {
        minimDigit = result[i].length;
    }
  }

  if(result.length === 0) return 2;

  return minimDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2