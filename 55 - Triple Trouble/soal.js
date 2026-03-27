function tripleTrouble(one, two, three){
    let result = '';
    
    for(let i = 0; i < one.length ; i++) {
        result += one[i];
        result += two[i];
        result += three[i];
    }

    return result;
}


console.log(tripleTrouble("aaa","bbb","ccc")); // "abcabcabc"
console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc")); // "abcabcabcabcabcabc"
console.log(tripleTrouble("burn", "reds", "roll")); // "brrueordlnsl"
console.log(tripleTrouble("Sea","urn","pms")); // "Supermans" 
console.log(tripleTrouble("LLh","euo","xtr")); // "LexLuthor"