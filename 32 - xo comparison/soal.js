function xo(str) {
    let lengthX = 0;
    let lengthO = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'x') lengthX++
        if(str[i] === 'o') lengthO++
    }

    return lengthX === lengthO;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true