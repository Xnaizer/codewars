function alienLanguage(str){
    let kalimat = str.toUpperCase();

    let katas = [];
    let kata = '';

    for(let i = 0; i < kalimat.length; i++) {
        kata += kalimat[i];
        if(kalimat[i] === ' ') {
            katas.push(kata.trim());
            kata = '';
        }
    }

    katas.push(kata.trim());

    for(index in katas) {
        katas[index] = katas[index].slice(0, -1) + katas[index].slice(-1).toLowerCase()
    }

    return katas.join(' ')
}



// console.log(alienLanguage("My name is John"));
// console.log(alienLanguage("this is an example"));
console.log(alienLanguage("Hello World"));
console.log(alienLanguage("HELLO WORLD"));