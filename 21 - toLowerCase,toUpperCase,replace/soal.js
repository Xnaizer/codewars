function alienLanguage(str){
    return str.split(' ').map((item) => {
        const kata = item.toUpperCase().split("")
        kata[item.length - 1] =  kata[item.length - 1].toLowerCase()
        return kata.join('')
    }).join(' ')
}



console.log(alienLanguage("My name is John"));
console.log(alienLanguage("this is an example"));
console.log(alienLanguage("Hello World"));
console.log(alienLanguage("HELLO WORLD"));