function checkAB(word) {
    let positionA = [];
    let positionB = [];
    let result = false;

    for(let i = 0; i < word.length; i++ ) {
        if(word[i].toLowerCase() === 'a') positionA.push(i);
        if(word[i].toLowerCase() === 'b') positionB.push(i);
    }

    for(let i = 0; i < positionA.length; i++) {
        for(let j = 0; j < positionB.length; j++) {
            if(Math.abs(positionB[j] - positionA[i]) === 4) {
                result = true;
            }
        }
    }

    return result;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false