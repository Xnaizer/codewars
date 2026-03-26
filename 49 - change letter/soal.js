function ubahHuruf(kata) {
  let words = kata.split('');
  let result = '';

  for(let i = 0; i < words.length; i++) {
    let code = kata[i].charCodeAt();
    
    if(code >= 97 && code <= 122) {
        result += String.fromCharCode((code + 1 - 96) % 26 + 96 );
    } else if (code >= 65 && code <= 90) {
        result += String.fromCharCode((code + 1 - 65) % 26 + 65);
    }
  }

  return result;
}

// TEST CASES
console.log(ubahHuruf('wowSsZ')); // xpx
console.log(ubahHuruf('dEvelOper')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu