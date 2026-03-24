function palindrome(kata) {
    let reversedWord = '';

    for(let i = 0; i < kata.length; i++) {
        reversedWord += kata[kata.length - 1 - i];
    }

    return kata === reversedWord;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false