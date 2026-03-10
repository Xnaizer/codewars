function duplicateEncode(word) {

    let data = {};
    let result = ""

    for(char of word) {
        // console.log(`${char in data} === ${char}`)
        const kar = char.toLowerCase()

        if(!(kar in data)) {
            data[kar] = 1
        } else {
            data[kar]++
        }
    }
    console.log(data)
    
    for(let i = 0; i < word.length; i++) {
        let huruf = word[i].toLowerCase()

        if(data[huruf] > 1) {
            result += ")"
        } else {
            result += "("
        }

    }

    return result
}

// duplicateEncode("din")
console.log(duplicateEncode("rEbece"))

// using of is returning the value
// using in is returning the index
